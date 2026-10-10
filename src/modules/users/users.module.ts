import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from '../../database/schemas/user.schema';
import { RolesModule } from '../roles/roles.module';
import { UsersRepository } from './users.repository';
import { UsersService } from './users.service';
import { UsersResolver } from './users.resolver';
import { UserNormalizer } from './normalizers/user.normalizer';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: User.name,
        schema: UserSchema,
      },
    ]),
    RolesModule,
  ],
  providers: [UsersRepository, UsersService, UsersResolver, UserNormalizer],
  exports: [UsersService, UsersRepository, UserNormalizer],
})
export class UsersModule { }
