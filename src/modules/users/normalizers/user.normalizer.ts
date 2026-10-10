import { Injectable } from '@nestjs/common';
import { Types } from 'mongoose';

import { UserDocument } from '../../../database/schemas/user.schema';
import { CreateUserDto } from '../dto/create-user.dto';
import { CreateUserInput } from '../dto/create-user.input';
import { UpdateUserDto } from '../dto/update-user.dto';
import { UpdateUserInput } from '../dto/update-user.input';
import { UserType } from '../dto/user.type';

@Injectable()
export class UserNormalizer {
  toUserType(user: UserDocument): UserType {
    const raw = user.toObject ? user.toObject() : user;
    return {
      id: user._id.toString(),
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      roleId: user.roleId.toString(),
      isActive: user.isActive,
      createdAt: (raw as { createdAt?: Date }).createdAt ?? new Date(),
      updatedAt: (raw as { updatedAt?: Date }).updatedAt ?? new Date(),
    };
  }

  toUserTypeList(users: UserDocument[]): UserType[] {
    return users.map((user) => this.toUserType(user));
  }

  toCreateUserDto(
    input: CreateUserInput,
    hashedPassword: string,
    roleId: Types.ObjectId,
  ): CreateUserDto {
    return {
      firstName: input.firstName.trim(),
      lastName: input.lastName.trim(),
      email: input.email.toLowerCase().trim(),
      password: hashedPassword,
      roleId,
      isActive: true,
    };
  }

  toUpdateUserDto(
    input: UpdateUserInput,
    hashedPassword?: string,
  ): UpdateUserDto {
    const updateDto: UpdateUserDto = {};

    if (input.firstName !== undefined) {
      updateDto.firstName = input.firstName.trim();
    }
    if (input.lastName !== undefined) {
      updateDto.lastName = input.lastName.trim();
    }
    if (input.isActive !== undefined) {
      updateDto.isActive = input.isActive;
    }
    if (hashedPassword !== undefined) {
      updateDto.password = hashedPassword;
    }

    return updateDto;
  }
}
