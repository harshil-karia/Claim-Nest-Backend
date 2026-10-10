import {
    BadRequestException,
    ConflictException,
    Injectable,
    NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { isValidObjectId, Model } from 'mongoose';
import * as argon2 from 'argon2';

import { Role, RoleDocument } from '../../database/schemas/role.schema';
import { ROLES } from '../roles/constant/role.constant';
import { UsersRepository } from './users.repository';
import { UserNormalizer } from './normalizers/user.normalizer';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { UserType } from './dto/user.type';

@Injectable()
export class UsersService {
    constructor(
        private readonly usersRepository: UsersRepository,
        private readonly userNormalizer: UserNormalizer,
        @InjectModel(Role.name)
        private readonly roleModel: Model<RoleDocument>,
    ) { }

    async createUser(input: CreateUserInput): Promise<UserType> {
        const email = input.email.toLowerCase().trim();

        if (!input.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            throw new BadRequestException('Please provide a valid email address');
        }

        if (!input.password || input.password.length < 8) {
            throw new BadRequestException(
                'Password must be at least 8 characters long',
            );
        }

        const existingUser = await this.usersRepository.findByEmail(email);
        if (existingUser) {
            throw new ConflictException('A user with this email already exists');
        }

        const userRole = await this.roleModel.findOne({ name: ROLES.USER });
        if (!userRole) {
            throw new NotFoundException(
                'Default user role not found. Please run the role seed first.',
            );
        }

        const hashedPassword = await argon2.hash(input.password);

        const createUserDto = this.userNormalizer.toCreateUserDto(
            input,
            hashedPassword,
            userRole._id,
        );

        const newUser = await this.usersRepository.create(createUserDto);

        return this.userNormalizer.toUserType(newUser);
    }

    async findAll(): Promise<UserType[]> {
        const users = await this.usersRepository.findAll();
        return this.userNormalizer.toUserTypeList(users);
    }

    async findById(id: string): Promise<UserType> {
        if (!isValidObjectId(id)) {
            throw new BadRequestException(`Invalid user ID: ${id}`);
        }

        const user = await this.usersRepository.findById(id);
        if (!user) {
            throw new NotFoundException(`User with ID ${id} not found`);
        }

        return this.userNormalizer.toUserType(user);
    }

    async updateUser(id: string, input: UpdateUserInput): Promise<UserType> {
        if (!isValidObjectId(id)) {
            throw new BadRequestException(`Invalid user ID: ${id}`);
        }

        const existingUser = await this.usersRepository.findById(id);
        if (!existingUser) {
            throw new NotFoundException(`User with ID ${id} not found`);
        }

        let hashedPassword: string | undefined;
        if (input.password !== undefined) {
            if (input.password.length < 8) {
                throw new BadRequestException(
                    'Password must be at least 8 characters long',
                );
            }
            hashedPassword = await argon2.hash(input.password);
        }

        const updateDto = this.userNormalizer.toUpdateUserDto(input, hashedPassword);

        const updatedUser = await this.usersRepository.updateById(id, updateDto);
        if (!updatedUser) {
            throw new NotFoundException(`User with ID ${id} not found`);
        }

        return this.userNormalizer.toUserType(updatedUser);
    }

    async deleteUser(id: string): Promise<boolean> {
        if (!isValidObjectId(id)) {
            throw new BadRequestException(`Invalid user ID: ${id}`);
        }

        const deleted = await this.usersRepository.deleteById(id);
        if (!deleted) {
            throw new NotFoundException(`User with ID ${id} not found`);
        }

        return true;
    }
}
