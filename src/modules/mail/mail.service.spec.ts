import { Test, TestingModule } from '@nestjs/testing';
import { ConfigService } from '@nestjs/config';
import { MailService } from './mail.service';

describe('MailService', () => {
  let service: MailService;
  let configService: jest.Mocked<Partial<ConfigService>>;

  beforeEach(async () => {
    configService = {
      get: jest.fn((key: string) => {
        if (key === 'mail.from') return 'noreply@claimnest.com';
        return undefined; // mock mode
      }),
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        MailService,
        {
          provide: ConfigService,
          useValue: configService,
        },
      ],
    }).compile();

    service = module.get<MailService>(MailService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should not throw in mock mode when sending password reset email', async () => {
    await expect(
      service.sendPasswordResetEmail(
        'recipient@example.com',
        'http://localhost:3000/reset-password?token=123',
      ),
    ).resolves.not.toThrow();
  });
});
