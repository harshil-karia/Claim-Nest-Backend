import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { Claim, ClaimDocument } from '../../database/schemas/claim.schema';
import { CreateClaimDto } from './dto/create-claim.dto';
import { UpdateClaimDto } from './dto/update-claim.dto';

@Injectable()
export class ClaimsRepository {
  constructor(
    @InjectModel(Claim.name)
    private readonly claimModel: Model<ClaimDocument>,
  ) {}

  async create(createClaimDto: CreateClaimDto): Promise<ClaimDocument> {
    const claim = new this.claimModel(createClaimDto);
    return claim.save();
  }

  async findById(id: string): Promise<ClaimDocument | null> {
    return this.claimModel.findById(id).exec();
  }

  async findAll(filter: Record<string, any> = {}): Promise<ClaimDocument[]> {
    return this.claimModel.find(filter).sort({ createdAt: -1 }).exec();
  }

  async findByUserId(userId: Types.ObjectId): Promise<ClaimDocument[]> {
    return this.claimModel.find({ userId }).sort({ createdAt: -1 }).exec();
  }

  async updateById(
    id: string,
    updateClaimDto: UpdateClaimDto,
  ): Promise<ClaimDocument | null> {
    return this.claimModel
      .findByIdAndUpdate(id, { $set: updateClaimDto }, { new: true })
      .exec();
  }

  async deleteById(id: string): Promise<ClaimDocument | null> {
    return this.claimModel.findByIdAndDelete(id).exec();
  }
}
