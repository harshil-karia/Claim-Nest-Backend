import { Args, ID, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { UserType } from './dto/user.type';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';

@Resolver(() => UserType)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Query(() => [UserType], {
    name: 'users',
    description: 'Retrieve all registered users',
  })
  async getUsers(): Promise<UserType[]> {
    return this.usersService.findAll();
  }

  @Query(() => UserType, {
    name: 'user',
    description: 'Retrieve a user by ID',
  })
  async getUserById(
    @Args('id', { type: () => ID }) id: string,
  ): Promise<UserType> {
    return this.usersService.findById(id);
  }

  @Mutation(() => UserType, {
    name: 'createUser',
    description: 'Register / Create a new user',
  })
  async createUser(
    @Args('input') input: CreateUserInput,
  ): Promise<UserType> {
    return this.usersService.createUser(input);
  }

  @Mutation(() => UserType, {
    name: 'updateUser',
    description: 'Update user profile details',
  })
  async updateUser(
    @Args('id', { type: () => ID }) id: string,
    @Args('input') input: UpdateUserInput,
  ): Promise<UserType> {
    return this.usersService.updateUser(id, input);
  }

  @Mutation(() => Boolean, {
    name: 'deleteUser',
    description: 'Delete a user by ID',
  })
  async deleteUser(
    @Args('id', { type: () => ID }) id: string,
  ): Promise<boolean> {
    return this.usersService.deleteUser(id);
  }
}
