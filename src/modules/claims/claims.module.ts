import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Claim, ClaimSchema } from '../../database/schemas/claim.schema';
import { UsersModule } from '../users/users.module';
import { ClaimsRepository } from './claims.repository';
import { ClaimsService } from './claims.service';
import { ClaimsResolver } from './claims.resolver';
import { ClaimNormalizer } from './normalizers/claim.normalizer';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Claim.name,
        schema: ClaimSchema,
      },
    ]),
    UsersModule,
  ],
  providers: [
    ClaimsRepository,
    ClaimsService,
    ClaimsResolver,
    ClaimNormalizer,
  ],
  exports: [ClaimsService, ClaimsRepository, ClaimNormalizer],
})
export class ClaimsModule {}
