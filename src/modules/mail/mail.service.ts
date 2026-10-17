import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as nodemailer from 'nodemailer';

@Injectable()
export class MailService {
  private readonly logger = new Logger(MailService.name);
  private transporter: nodemailer.Transporter | null = null;

  constructor(private readonly configService: ConfigService) {
    const host = this.configService.get<string>('mail.host');
    const user = this.configService.get<string>('mail.user');
    const pass = this.configService.get<string>('mail.pass');
    const port = this.configService.get<number>('mail.port') ?? 587;

    if (host && user && pass) {
      this.transporter = nodemailer.createTransport({
        host,
        port,
        secure: port === 465,
        auth: {
          user,
          pass,
        },
      });
      this.logger.log(`Mail transporter initialized with host: ${host}`);
    } else {
      this.logger.warn(
        'Mail credentials not configured. Emails will be logged to console in mock mode.',
      );
    }
  }

  async sendPasswordResetEmail(to: string, resetLink: string): Promise<void> {
    const from =
      this.configService.get<string>('mail.from') ?? 'noreply@claimnest.com';

    const mailOptions = {
      from: `"Claim Nest Support" <${from}>`,
      to,
      subject: 'Reset Your Password - Claim Nest',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px;">
          <h2 style="color: #1a365d;">Claim Nest Password Reset</h2>
          <p>Hello,</p>
          <p>We received a request to reset your password. Click the button below to choose a new password:</p>
          <div style="margin: 30px 0; text-align: center;">
            <a href="${resetLink}" style="background-color: #2563eb; color: #ffffff; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: bold; display: inline-block;">
              Reset Password
            </a>
          </div>
          <p style="color: #64748b; font-size: 14px;">
            Or copy and paste this link in your browser:<br/>
            <a href="${resetLink}" style="color: #2563eb;">${resetLink}</a>
          </p>
          <p style="color: #64748b; font-size: 13px; margin-top: 24px;">
            This link is valid for 15 minutes. If you did not request a password reset, you can safely ignore this email.
          </p>
        </div>
      `,
    };

    if (this.transporter) {
      try {
        await this.transporter.sendMail(mailOptions);
        this.logger.log(`Password reset email sent to ${to}`);
      } catch (error) {
        this.logger.error(`Failed to send password reset email to ${to}:`, error);
        throw error;
      }
    } else {
      this.logger.log(
        `[MOCK EMAIL] To: ${to} | Subject: ${mailOptions.subject} | Reset Link: ${resetLink}`,
      );
    }
  }
}
