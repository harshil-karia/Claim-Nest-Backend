import { Args, ID, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ClaimsService } from './claims.service';
import { ClaimType } from './dto/claim.type';
import { CreateClaimInput } from './dto/create-claim.input';
import { UpdateClaimInput } from './dto/update-claim.input';
import { CurrentGqlUser } from '../auth/decorators/current-gql-user.decorator';
import { type JwtPayload } from '../auth/guards/jwt-auth.guard';

@Resolver(() => ClaimType)
export class ClaimsResolver {
  constructor(private readonly claimsService: ClaimsService) {}

  @Query(() => [ClaimType], {
    name: 'claims',
    description: 'Retrieve claims (optionally filtered by userId)',
  })
  async getClaims(
    @Args('userId', { type: () => ID, nullable: true }) userId?: string,
  ): Promise<ClaimType[]> {
    return this.claimsService.findAll(userId);
  }

  @Query(() => ClaimType, {
    name: 'claim',
    description: 'Retrieve a single claim by its ID',
  })
  async getClaimById(
    @Args('id', { type: () => ID }) id: string,
  ): Promise<ClaimType> {
    return this.claimsService.findById(id);
  }

  @Mutation(() => ClaimType, {
    name: 'createClaim',
    description: 'Create a new share inheritance claim',
  })
  async createClaim(
    @Args('input') input: CreateClaimInput,
    @CurrentGqlUser() user?: JwtPayload,
  ): Promise<ClaimType> {
    return this.claimsService.createClaim(input, user?.sub);
  }

  @Mutation(() => ClaimType, {
    name: 'updateClaim',
    description: 'Update an existing claim details',
  })
  async updateClaim(
    @Args('id', { type: () => ID }) id: string,
    @Args('input') input: UpdateClaimInput,
  ): Promise<ClaimType> {
    return this.claimsService.updateClaim(id, input);
  }

  @Mutation(() => Boolean, {
    name: 'deleteClaim',
    description: 'Delete a claim by its ID',
  })
  async deleteClaim(
    @Args('id', { type: () => ID }) id: string,
  ): Promise<boolean> {
    return this.claimsService.deleteClaim(id);
  }
}
