import { BadRequestException, ConflictException, NotFoundException } from '@nestjs/common';
import { getModelToken } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';
import { Types } from 'mongoose';
import { UsersService } from './users.service';
import { UsersRepository } from './users.repository';
import { UserNormalizer } from './normalizers/user.normalizer';
import { Role } from '../../database/schemas/role.schema';
import { ROLES } from '../roles/constant/role.constant';

type MockType<T> = {
  [P in keyof T]?: jest.Mock;
};

describe('UsersService', () => {
  let service: UsersService;
  let repository: MockType<UsersRepository>;
  let normalizer: UserNormalizer;
  let roleModel: { findOne: jest.Mock };

  beforeEach(async () => {
    repository = {
      findByEmail: jest.fn(),
      findById: jest.fn(),
      findAll: jest.fn(),
      create: jest.fn(),
      updateById: jest.fn(),
      deleteById: jest.fn(),
    };

    roleModel = {
      findOne: jest.fn(),
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
        UserNormalizer,
        {
          provide: UsersRepository,
          useValue: repository,
        },
        {
          provide: getModelToken(Role.name),
          useValue: roleModel,
        },
      ],
    }).compile();

    service = module.get<UsersService>(UsersService);
    normalizer = module.get<UserNormalizer>(UserNormalizer);
  });

  describe('createUser', () => {
    it('should throw BadRequestException if email is invalid', async () => {
      await expect(
        service.createUser({
          email: 'invalid-email',
          password: 'password123',
          firstName: 'John',
          lastName: 'Doe',
        }),
      ).rejects.toThrow(BadRequestException);
    });

    it('should throw BadRequestException if password is too short', async () => {
      await expect(
        service.createUser({
          email: 'valid@example.com',
          password: 'short',
          firstName: 'John',
          lastName: 'Doe',
        }),
      ).rejects.toThrow(BadRequestException);
    });

    it('should throw ConflictException if user email already exists', async () => {
      repository.findByEmail!.mockResolvedValue({ _id: new Types.ObjectId() } as any);

      await expect(
        service.createUser({
          email: 'exists@example.com',
          password: 'password123',
          firstName: 'John',
          lastName: 'Doe',
        }),
      ).rejects.toThrow(ConflictException);
    });

    it('should create and return user if input is valid', async () => {
      const mockRoleId = new Types.ObjectId();
      const mockUserId = new Types.ObjectId();

      repository.findByEmail!.mockResolvedValue(null);
      roleModel.findOne.mockResolvedValue({ _id: mockRoleId, name: ROLES.USER });
      repository.create!.mockResolvedValue({
        _id: mockUserId,
        email: 'john@example.com',
        firstName: 'John',
        lastName: 'Doe',
        roleId: mockRoleId,
        isActive: true,
      } as any);

      const result = await service.createUser({
        email: 'john@example.com',
        password: 'password123',
        firstName: 'John',
        lastName: 'Doe',
      });

      expect(result.email).toBe('john@example.com');
      expect(result.id).toBe(mockUserId.toString());
    });
  });

  describe('findById', () => {
    it('should throw BadRequestException for invalid objectId', async () => {
      await expect(service.findById('invalid-id')).rejects.toThrow(BadRequestException);
    });

    it('should throw NotFoundException if user is not found', async () => {
      const validId = new Types.ObjectId().toString();
      repository.findById!.mockResolvedValue(null);

      await expect(service.findById(validId)).rejects.toThrow(NotFoundException);
    });

    it('should return user when found', async () => {
      const mockId = new Types.ObjectId();
      const mockRoleId = new Types.ObjectId();

      repository.findById!.mockResolvedValue({
        _id: mockId,
        email: 'found@example.com',
        firstName: 'Found',
        lastName: 'User',
        roleId: mockRoleId,
        isActive: true,
      } as any);

      const result = await service.findById(mockId.toString());
      expect(result.email).toBe('found@example.com');
    });
  });

  describe('deleteUser', () => {
    it('should delete user if exists', async () => {
      const mockId = new Types.ObjectId().toString();
      repository.deleteById!.mockResolvedValue({ _id: mockId } as any);

      const result = await service.deleteUser(mockId);
      expect(result).toBe(true);
    });
  });
});
