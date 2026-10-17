import {
  BadRequestException,
  ConflictException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import * as argon2 from 'argon2';
import { Model } from 'mongoose';

import { Role, RoleDocument } from '../../database/schemas/role.schema';
import { ROLES } from '../roles/constant/role.constant';
import { UsersRepository } from '../users/users.repository';
import { MailService } from '../mail/mail.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { ForgotPasswordDto } from './dto/forgot-password.dto';
import { ResetPasswordDto } from './dto/reset-password.dto';
import { RefreshTokenDto } from './dto/refresh-token.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersRepository: UsersRepository,
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
    private readonly mailService: MailService,
    @InjectModel(Role.name)
    private readonly roleModel: Model<RoleDocument>,
  ) {}

  async register(registerDto: RegisterDto) {
    const email = registerDto.email.toLowerCase().trim();

    const existingUser = await this.usersRepository.findByEmail(email);
    if (existingUser) {
      throw new ConflictException('A user with this email already exists');
    }

    // All self-registered users are assigned the standard 'user' role. Admin accounts can only be seeded.
    const defaultRole = await this.roleModel.findOne({ name: ROLES.USER });
    if (!defaultRole) {
      throw new NotFoundException(
        'Default user role not found. Please run the role seed first.',
      );
    }

    const hashedPassword = await argon2.hash(registerDto.password);

    const newUser = await this.usersRepository.create({
      firstName: registerDto.firstName.trim(),
      lastName: registerDto.lastName.trim(),
      email,
      password: hashedPassword,
      roleId: defaultRole._id,
      isActive: true,
    });

    const tokens = await this.generateTokens(
      newUser._id.toString(),
      newUser.email,
      ROLES.USER,
    );

    const hashedRefreshToken = await argon2.hash(tokens.refreshToken);
    await this.usersRepository.updateRefreshToken(
      newUser._id.toString(),
      hashedRefreshToken,
    );

    return {
      message: 'Registration successful',
      accessToken: tokens.accessToken,
      refreshToken: tokens.refreshToken,
      user: {
        id: newUser._id.toString(),
        firstName: newUser.firstName,
        lastName: newUser.lastName,
        email: newUser.email,
        role: ROLES.USER,
      },
    };
  }

  async login(loginDto: LoginDto) {
    const email = loginDto.email.toLowerCase().trim();

    const user = await this.usersRepository.findByEmailWithRole(email);
    if (!user) {
      throw new UnauthorizedException('Invalid email or password');
    }

    if (!user.isActive) {
      throw new UnauthorizedException('This account has been deactivated');
    }

    const isPasswordValid = await argon2.verify(user.password, loginDto.password);
    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid email or password');
    }

    const roleName = (user.roleId as unknown as Role)?.name ?? ROLES.USER;

    const tokens = await this.generateTokens(
      user._id.toString(),
      user.email,
      roleName,
    );

    const hashedRefreshToken = await argon2.hash(tokens.refreshToken);
    await this.usersRepository.updateRefreshToken(
      user._id.toString(),
      hashedRefreshToken,
    );

    return {
      message: 'Login successful',
      accessToken: tokens.accessToken,
      refreshToken: tokens.refreshToken,
      user: {
        id: user._id.toString(),
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        role: roleName,
      },
    };
  }

  async logout(userId: string) {
    await this.usersRepository.updateRefreshToken(userId, null);
    return {
      message: 'Logged out successfully',
    };
  }

  async refreshToken(dto: RefreshTokenDto) {
    const refreshSecret = this.configService.get<string>('jwt.refreshSecret');

    let payload: { sub: string; email: string };
    try {
      payload = await this.jwtService.verifyAsync(dto.refreshToken, {
        secret: refreshSecret,
      });
    } catch {
      throw new UnauthorizedException('Invalid or expired refresh token');
    }

    const user = await this.usersRepository.findByIdWithRole(payload.sub);
    if (!user || !user.refreshToken || !user.isActive) {
      throw new UnauthorizedException('Invalid refresh token');
    }

    const isRefreshTokenValid = await argon2.verify(
      user.refreshToken,
      dto.refreshToken,
    );
    if (!isRefreshTokenValid) {
      throw new UnauthorizedException('Invalid refresh token');
    }

    const roleName = (user.roleId as unknown as Role)?.name ?? ROLES.USER;

    const tokens = await this.generateTokens(
      user._id.toString(),
      user.email,
      roleName,
    );

    const hashedRefreshToken = await argon2.hash(tokens.refreshToken);
    await this.usersRepository.updateRefreshToken(
      user._id.toString(),
      hashedRefreshToken,
    );

    return {
      accessToken: tokens.accessToken,
      refreshToken: tokens.refreshToken,
    };
  }

  async forgotPassword(dto: ForgotPasswordDto) {
    const email = dto.email.toLowerCase().trim();
    const user = await this.usersRepository.findByEmail(email);

    if (!user) {
      // Return success response to prevent email enumeration
      return {
        message: 'If an account with that email exists, a password reset link has been sent.',
      };
    }

    const resetSecret = this.configService.get<string>('jwt.resetPasswordSecret');
    const resetExpiresIn =
      this.configService.get<string>('jwt.resetPasswordExpiresIn') ?? '15m';

    const resetToken = await this.jwtService.signAsync(
      {
        sub: user._id.toString(),
        email: user.email,
        type: 'password-reset',
      },
      {
        secret: resetSecret,
        expiresIn: resetExpiresIn as any,
      },
    );

    const frontendUrl =
      this.configService.get<string>('frontend.url') ?? 'http://localhost:3000';
    const resetLink = `${frontendUrl}/reset-password?token=${resetToken}`;

    await this.mailService.sendPasswordResetEmail(user.email, resetLink);

    return {
      message: 'Password reset link sent to your email',
    };
  }

  async resetPassword(dto: ResetPasswordDto) {
    const resetSecret = this.configService.get<string>('jwt.resetPasswordSecret');

    let payload: { sub: string; email: string; type: string; iat?: number };
    try {
      payload = await this.jwtService.verifyAsync(dto.token, {
        secret: resetSecret,
      });
    } catch {
      throw new BadRequestException('Invalid or expired reset token');
    }

    if (payload.type !== 'password-reset' || !payload.sub) {
      throw new BadRequestException('Invalid token type for password reset');
    }

    const user = await this.usersRepository.findById(payload.sub);
    if (!user) {
      throw new BadRequestException('User not found');
    }

    const hashedNewPassword = await argon2.hash(dto.newPassword);
    await this.usersRepository.updatePassword(
      user._id.toString(),
      hashedNewPassword,
    );

    return {
      message: 'Password has been reset successfully',
    };
  }

  private async generateTokens(userId: string, email: string, role: string) {
    const secret = this.configService.get<string>('jwt.secret');
    const expiresIn = this.configService.get<string>('jwt.expiresIn') ?? '15m';
    const refreshSecret = this.configService.get<string>('jwt.refreshSecret');
    const refreshExpiresIn =
      this.configService.get<string>('jwt.refreshExpiresIn') ?? '7d';

    const [accessToken, refreshToken] = await Promise.all([
      this.jwtService.signAsync(
        { sub: userId, email, role },
        { secret, expiresIn: expiresIn as any },
      ),
      this.jwtService.signAsync(
        { sub: userId, email },
        { secret: refreshSecret, expiresIn: refreshExpiresIn as any },
      ),
    ]);

    return {
      accessToken,
      refreshToken,
    };
  }
}
