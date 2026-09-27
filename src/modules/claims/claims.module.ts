import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Claim, ClaimSchema } from '../../database/schemas/claim.schema';

@Module({
    imports: [
    MongooseModule.forFeature([
      {
        name: Claim.name,
        schema: ClaimSchema,
      },
    ]),
  ],
})
export class ClaimsModule {}
