import { NestFactory } from '@nestjs/core';
import { getModelToken } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { AppModule } from '../../app.module';
import { Role, RoleDocument } from '../schemas/role.schema';
import { ROLES } from '../../modules/roles/constant/role.constant';

const roles = Object.values(ROLES).map((role) => ({
  name: role,
}));

async function seedRoles() {
  const app = await NestFactory.createApplicationContext(AppModule);

  try {
    const roleModel = app.get<Model<RoleDocument>>(
      getModelToken(Role.name),
    );

    for (const role of roles) {
      await roleModel.updateOne(
        { name: role.name },
        { $setOnInsert: role },
        { upsert: true },
      );
    }

    console.log('Roles seeded successfully.');
  } catch (error) {
    console.error('Failed to seed roles:', error);
    process.exitCode = 1;
  } finally {
    await app.close();
  }
}

void seedRoles();