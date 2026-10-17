import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { isValidObjectId, Types } from 'mongoose';
import { ClaimsRepository } from './claims.repository';
import { ClaimNormalizer } from './normalizers/claim.normalizer';
import { UsersRepository } from '../users/users.repository';
import { CreateClaimInput } from './dto/create-claim.input';
import { UpdateClaimInput } from './dto/update-claim.input';
import { ClaimType } from './dto/claim.type';

@Injectable()
export class ClaimsService {
  constructor(
    private readonly claimsRepository: ClaimsRepository,
    private readonly claimNormalizer: ClaimNormalizer,
    private readonly usersRepository: UsersRepository,
  ) {}

  async createClaim(
    input: CreateClaimInput,
    authUserId?: string,
  ): Promise<ClaimType> {
    const targetUserId = input.userId ?? authUserId;

    if (!targetUserId) {
      throw new BadRequestException(
        'userId must be provided either in the input or via authentication',
      );
    }

    if (!isValidObjectId(targetUserId)) {
      throw new BadRequestException(`Invalid user ID: ${targetUserId}`);
    }

    const user = await this.usersRepository.findById(targetUserId);
    if (!user) {
      throw new NotFoundException(`User with ID ${targetUserId} not found`);
    }

    const createClaimDto = this.claimNormalizer.toCreateClaimDto(
      input,
      new Types.ObjectId(targetUserId),
    );

    const newClaim = await this.claimsRepository.create(createClaimDto);
    return this.claimNormalizer.toClaimType(newClaim);
  }

  async findAll(userId?: string): Promise<ClaimType[]> {
    if (userId) {
      if (!isValidObjectId(userId)) {
        throw new BadRequestException(`Invalid user ID: ${userId}`);
      }
      const claims = await this.claimsRepository.findByUserId(
        new Types.ObjectId(userId),
      );
      return this.claimNormalizer.toClaimTypeList(claims);
    }

    const claims = await this.claimsRepository.findAll();
    return this.claimNormalizer.toClaimTypeList(claims);
  }

  async findById(id: string): Promise<ClaimType> {
    if (!isValidObjectId(id)) {
      throw new BadRequestException(`Invalid claim ID: ${id}`);
    }

    const claim = await this.claimsRepository.findById(id);
    if (!claim) {
      throw new NotFoundException(`Claim with ID ${id} not found`);
    }

    return this.claimNormalizer.toClaimType(claim);
  }

  async updateClaim(id: string, input: UpdateClaimInput): Promise<ClaimType> {
    if (!isValidObjectId(id)) {
      throw new BadRequestException(`Invalid claim ID: ${id}`);
    }

    const existingClaim = await this.claimsRepository.findById(id);
    if (!existingClaim) {
      throw new NotFoundException(`Claim with ID ${id} not found`);
    }

    const updateDto = this.claimNormalizer.toUpdateClaimDto(input);
    const updatedClaim = await this.claimsRepository.updateById(id, updateDto);

    if (!updatedClaim) {
      throw new NotFoundException(`Claim with ID ${id} not found`);
    }

    return this.claimNormalizer.toClaimType(updatedClaim);
  }

  async deleteClaim(id: string): Promise<boolean> {
    if (!isValidObjectId(id)) {
      throw new BadRequestException(`Invalid claim ID: ${id}`);
    }

    const deleted = await this.claimsRepository.deleteById(id);
    if (!deleted) {
      throw new NotFoundException(`Claim with ID ${id} not found`);
    }

    return true;
  }
}
