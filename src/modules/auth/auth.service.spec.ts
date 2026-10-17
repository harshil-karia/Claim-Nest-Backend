import { ConflictException, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { getModelToken } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';
import * as argon2 from 'argon2';
import { Types } from 'mongoose';
import { AuthService } from './auth.service';
import { UsersRepository } from '../users/users.repository';
import { MailService } from '../mail/mail.service';
import { Role } from '../../database/schemas/role.schema';
import { ROLES } from '../roles/constant/role.constant';

type MockType<T> = {
  [P in keyof T]?: jest.Mock;
};

describe('AuthService', () => {
  let service: AuthService;
  let usersRepository: MockType<UsersRepository>;
  let jwtService: MockType<JwtService>;
  let configService: MockType<ConfigService>;
  let mailService: MockType<MailService>;
  let roleModel: { findOne: jest.Mock };

  beforeEach(async () => {
    usersRepository = {
      findByEmail: jest.fn(),
      findByEmailWithRole: jest.fn(),
      findById: jest.fn(),
      findByIdWithRole: jest.fn(),
      create: jest.fn(),
      updateRefreshToken: jest.fn(),
      updatePassword: jest.fn(),
    };

    jwtService = {
      signAsync: jest.fn().mockResolvedValue('mock_token'),
      verifyAsync: jest.fn(),
    };

    configService = {
      get: jest.fn((key: string) => {
        const configs: Record<string, string> = {
          'jwt.secret': 'secret',
          'jwt.expiresIn': '15m',
          'jwt.refreshSecret': 'refresh_secret',
          'jwt.refreshExpiresIn': '7d',
          'jwt.resetPasswordSecret': 'reset_secret',
          'jwt.resetPasswordExpiresIn': '15m',
          'frontend.url': 'http://localhost:3000',
        };
        return configs[key];
      }),
    };

    mailService = {
      sendPasswordResetEmail: jest.fn().mockResolvedValue(undefined),
    };

    roleModel = {
      findOne: jest.fn(),
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AuthService,
        {
          provide: UsersRepository,
          useValue: usersRepository,
        },
        {
          provide: JwtService,
          useValue: jwtService,
        },
        {
          provide: ConfigService,
          useValue: configService,
        },
        {
          provide: MailService,
          useValue: mailService,
        },
        {
          provide: getModelToken(Role.name),
          useValue: roleModel,
        },
      ],
    }).compile();

    service = module.get<AuthService>(AuthService);
  });

  describe('register', () => {
    it('should throw ConflictException if user already exists', async () => {
      usersRepository.findByEmail!.mockResolvedValue({ _id: new Types.ObjectId() } as any);

      await expect(
        service.register({
          email: 'duplicate@example.com',
          password: 'Password123!',
          firstName: 'John',
          lastName: 'Doe',
        }),
      ).rejects.toThrow(ConflictException);
    });

    it('should register user and return tokens', async () => {
      const mockRoleId = new Types.ObjectId();
      const mockUserId = new Types.ObjectId();

      usersRepository.findByEmail!.mockResolvedValue(null);
      roleModel.findOne.mockResolvedValue({ _id: mockRoleId, name: ROLES.USER });
      usersRepository.create!.mockResolvedValue({
        _id: mockUserId,
        email: 'newuser@example.com',
        firstName: 'New',
        lastName: 'User',
      } as any);

      const result = await service.register({
        email: 'newuser@example.com',
        password: 'Password123!',
        firstName: 'New',
        lastName: 'User',
      });

      expect(result.message).toBe('Registration successful');
      expect(result.accessToken).toBe('mock_token');
      expect(result.user.email).toBe('newuser@example.com');
    });
  });

  describe('login', () => {
    it('should throw UnauthorizedException on invalid credentials', async () => {
      usersRepository.findByEmailWithRole!.mockResolvedValue(null);

      await expect(
        service.login({
          email: 'notfound@example.com',
          password: 'Password123!',
        }),
      ).rejects.toThrow(UnauthorizedException);
    });

    it('should login successfully with correct password', async () => {
      const mockUserId = new Types.ObjectId();
      const hashedPassword = await argon2.hash('Password123!');

      usersRepository.findByEmailWithRole!.mockResolvedValue({
        _id: mockUserId,
        email: 'user@example.com',
        password: hashedPassword,
        isActive: true,
        roleId: { name: ROLES.USER },
      } as any);

      const result = await service.login({
        email: 'user@example.com',
        password: 'Password123!',
      });

      expect(result.message).toBe('Login successful');
      expect(result.accessToken).toBe('mock_token');
    });
  });

  describe('logout', () => {
    it('should clear refresh token on logout', async () => {
      usersRepository.updateRefreshToken!.mockResolvedValue(null);

      const result = await service.logout('user_123');
      expect(usersRepository.updateRefreshToken).toHaveBeenCalledWith('user_123', null);
      expect(result.message).toBe('Logged out successfully');
    });
  });

  describe('forgotPassword', () => {
    it('should generate reset token and call mail service when user exists', async () => {
      usersRepository.findByEmail!.mockResolvedValue({
        _id: new Types.ObjectId(),
        email: 'reset@example.com',
      } as any);

      const result = await service.forgotPassword({ email: 'reset@example.com' });

      expect(mailService.sendPasswordResetEmail).toHaveBeenCalled();
      expect(result.message).toBe('Password reset link sent to your email');
    });
  });

  describe('resetPassword', () => {
    it('should reset password when token is valid', async () => {
      const mockUserId = new Types.ObjectId();
      jwtService.verifyAsync!.mockResolvedValue({
        sub: mockUserId.toString(),
        type: 'password-reset',
      });

      usersRepository.findById!.mockResolvedValue({
        _id: mockUserId,
      } as any);

      const result = await service.resetPassword({
        token: 'valid_token',
        newPassword: 'NewPassword123!',
      });

      expect(usersRepository.updatePassword).toHaveBeenCalled();
      expect(result.message).toBe('Password has been reset successfully');
    });
  });
});
