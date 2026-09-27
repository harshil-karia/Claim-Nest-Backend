import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { getModelToken } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as argon2 from 'argon2';

import { AppModule } from '../../app.module';
import { Role, RoleDocument } from '../schemas/role.schema';
import { User, UserDocument } from '../schemas/user.schema';
import { ROLES } from '../../modules/roles/constant/role.constant';

async function seedAdminUser() {
  const app = await NestFactory.createApplicationContext(AppModule);

  try {
    const configService = app.get(ConfigService);

    const roleModel = app.get<Model<RoleDocument>>(getModelToken(Role.name));

    const userModel = app.get<Model<UserDocument>>(getModelToken(User.name));

    const adminRole = await roleModel.findOne({
      name: ROLES.ADMIN,
    });

    if (!adminRole) {
      throw new Error('Admin role not found. Please run the role seed first.');
    }

    const email = configService.getOrThrow<string>('admin.email');
    const password = configService.getOrThrow<string>('admin.password');

    const hashedPassword = await argon2.hash(password);

    await userModel.updateOne(
      { email },
      {
        $setOnInsert: {
          firstName: 'Admin',
          lastName: 'User',
          password: hashedPassword,
          roleId: adminRole._id,
          isActive: true,
        },
      },
      { upsert: true },
    );

    console.log('Admin user seeded successfully.');
  } catch (error) {
    console.error('Failed to seed admin user:', error);
    process.exitCode = 1;
  } finally {
    await app.close();
  }
}

seedAdminUser();
