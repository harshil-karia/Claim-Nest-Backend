import { Test, TestingModule } from '@nestjs/testing';
import { UsersResolver } from './users.resolver';
import { UsersService } from './users.service';
import { UserType } from './dto/user.type';

describe('UsersResolver', () => {
  let resolver: UsersResolver;
  let service: jest.Mocked<Partial<UsersService>>;

  const mockUser: UserType = {
    id: 'user123',
    firstName: 'John',
    lastName: 'Doe',
    email: 'john@example.com',
    roleId: 'role123',
    isActive: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  beforeEach(async () => {
    service = {
      findAll: jest.fn().mockResolvedValue([mockUser]),
      findById: jest.fn().mockResolvedValue(mockUser),
      createUser: jest.fn().mockResolvedValue(mockUser),
      updateUser: jest.fn().mockResolvedValue(mockUser),
      deleteUser: jest.fn().mockResolvedValue(true),
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersResolver,
        {
          provide: UsersService,
          useValue: service,
        },
      ],
    }).compile();

    resolver = module.get<UsersResolver>(UsersResolver);
  });

  it('should return all users', async () => {
    const result = await resolver.getUsers();
    expect(result).toHaveLength(1);
    expect(result[0].email).toBe('john@example.com');
  });

  it('should return user by id', async () => {
    const result = await resolver.getUserById('user123');
    expect(result.id).toBe('user123');
  });

  it('should create user', async () => {
    const result = await resolver.createUser({
      firstName: 'John',
      lastName: 'Doe',
      email: 'john@example.com',
      password: 'password123',
    });
    expect(result.email).toBe('john@example.com');
  });

  it('should delete user', async () => {
    const result = await resolver.deleteUser('user123');
    expect(result).toBe(true);
  });
});
