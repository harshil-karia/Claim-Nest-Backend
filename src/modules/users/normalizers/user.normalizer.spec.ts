import { Types } from 'mongoose';
import { UserNormalizer } from './user.normalizer';
import { UserDocument } from '../../../database/schemas/user.schema';

describe('UserNormalizer', () => {
  let normalizer: UserNormalizer;

  beforeEach(() => {
    normalizer = new UserNormalizer();
  });

  it('should normalize a user document to UserType', () => {
    const mockId = new Types.ObjectId();
    const mockRoleId = new Types.ObjectId();
    const now = new Date();

    const mockUserDoc = {
      _id: mockId,
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
      roleId: mockRoleId,
      isActive: true,
      toObject: () => ({
        createdAt: now,
        updatedAt: now,
      }),
    } as unknown as UserDocument;

    const result = normalizer.toUserType(mockUserDoc);

    expect(result).toEqual({
      id: mockId.toString(),
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
      roleId: mockRoleId.toString(),
      isActive: true,
      createdAt: now,
      updatedAt: now,
    });
  });

  it('should map a list of user documents', () => {
    const mockId = new Types.ObjectId();
    const mockRoleId = new Types.ObjectId();
    const mockUserDoc = {
      _id: mockId,
      firstName: 'Jane',
      lastName: 'Doe',
      email: 'jane.doe@example.com',
      roleId: mockRoleId,
      isActive: true,
      toObject: () => ({}),
    } as unknown as UserDocument;

    const result = normalizer.toUserTypeList([mockUserDoc]);

    expect(result).toHaveLength(1);
    expect(result[0].email).toBe('jane.doe@example.com');
  });

  it('should create CreateUserDto properly', () => {
    const roleId = new Types.ObjectId();
    const input = {
      firstName: '  Alice ',
      lastName: ' Smith ',
      email: ' ALICE@example.com ',
      password: 'password123',
    };

    const dto = normalizer.toCreateUserDto(input, 'hashed_password', roleId);

    expect(dto).toEqual({
      firstName: 'Alice',
      lastName: 'Smith',
      email: 'alice@example.com',
      password: 'hashed_password',
      roleId,
      isActive: true,
    });
  });

  it('should create UpdateUserDto with provided fields only', () => {
    const input = {
      firstName: '  Bob ',
      isActive: false,
    };

    const dto = normalizer.toUpdateUserDto(input);

    expect(dto).toEqual({
      firstName: 'Bob',
      isActive: false,
    });
    expect(dto.password).toBeUndefined();
  });
});
