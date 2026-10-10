import { Types } from 'mongoose';

export class CreateUserDto {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  roleId: Types.ObjectId;
  isActive?: boolean;
}
