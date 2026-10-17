import { Test, TestingModule } from '@nestjs/testing';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

describe('AuthController', () => {
  let controller: AuthController;
  let authService: jest.Mocked<Partial<AuthService>>;

  beforeEach(async () => {
    authService = {
      register: jest.fn().mockResolvedValue({ message: 'Registration successful' }),
      login: jest.fn().mockResolvedValue({ message: 'Login successful' }),
      logout: jest.fn().mockResolvedValue({ message: 'Logged out successfully' }),
      refreshToken: jest.fn().mockResolvedValue({ accessToken: 'a', refreshToken: 'r' }),
      forgotPassword: jest.fn().mockResolvedValue({ message: 'Password reset link sent' }),
      resetPassword: jest.fn().mockResolvedValue({ message: 'Password reset successful' }),
    };

    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthController],
      providers: [
        {
          provide: AuthService,
          useValue: authService,
        },
        {
          provide: JwtAuthGuard,
          useValue: { canActivate: () => true },
        },
        {
          provide: JwtService,
          useValue: {},
        },
        {
          provide: ConfigService,
          useValue: { get: () => 'secret' },
        },
      ],
    }).compile();

    controller = module.get<AuthController>(AuthController);
  });

  it('should call authService.register', async () => {
    const dto = {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john@example.com',
      password: 'password123',
    };
    const result = await controller.register(dto);
    expect(authService.register).toHaveBeenCalledWith(dto);
    expect(result).toEqual({ message: 'Registration successful' });
  });

  it('should call authService.login', async () => {
    const dto = { email: 'john@example.com', password: 'password123' };
    const result = await controller.login(dto);
    expect(authService.login).toHaveBeenCalledWith(dto);
    expect(result).toEqual({ message: 'Login successful' });
  });

  it('should call authService.logout', async () => {
    const user = { sub: 'user_123', email: 'john@example.com' };
    const result = await controller.logout(user);
    expect(authService.logout).toHaveBeenCalledWith('user_123');
    expect(result).toEqual({ message: 'Logged out successfully' });
  });

  it('should call authService.forgotPassword', async () => {
    const dto = { email: 'john@example.com' };
    const result = await controller.forgotPassword(dto);
    expect(authService.forgotPassword).toHaveBeenCalledWith(dto);
    expect(result).toEqual({ message: 'Password reset link sent' });
  });

  it('should call authService.resetPassword', async () => {
    const dto = { token: 'tok_123', newPassword: 'newpassword123' };
    const result = await controller.resetPassword(dto);
    expect(authService.resetPassword).toHaveBeenCalledWith(dto);
    expect(result).toEqual({ message: 'Password reset successful' });
  });
});
