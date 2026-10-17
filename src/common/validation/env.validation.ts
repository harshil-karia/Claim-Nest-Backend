import * as Joi from 'joi';

export const envValidationSchema = Joi.object({
  // Application
  PORT: Joi.number().port().default(3000),

  NODE_ENV: Joi.string()
    .valid('development', 'production', 'test')
    .default('development'),

  // Database
  MONGODB_URI: Joi.string().required(),

  // Authentication
  JWT_SECRET: Joi.string().required(),
  JWT_EXPIRES_IN: Joi.string().default('15m'),
  JWT_REFRESH_SECRET: Joi.string().optional(),
  JWT_REFRESH_EXPIRES_IN: Joi.string().default('7d'),
  JWT_RESET_PASSWORD_SECRET: Joi.string().optional(),
  JWT_RESET_PASSWORD_EXPIRES_IN: Joi.string().default('15m'),

  // Mail
  MAIL_HOST: Joi.string().optional().allow(''),
  MAIL_PORT: Joi.number().optional().default(587),
  MAIL_USER: Joi.string().optional().allow(''),
  MAIL_PASS: Joi.string().optional().allow(''),
  MAIL_FROM: Joi.string().optional().default('noreply@claimnest.com'),

  // Frontend
  FRONTEND_URL: Joi.string().uri().optional().default('http://localhost:3000'),

  // Admin Seed
  ADMIN_EMAIL: Joi.string().email().required(),
  ADMIN_PASSWORD: Joi.string().min(8).required(),
});
