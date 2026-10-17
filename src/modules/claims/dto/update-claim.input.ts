import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { IsArray, IsOptional, IsString, ValidateNested } from 'class-validator';
import { CompanyDetailsInput } from './company-details.input';
import { ShareDetailsInput } from './share-details.input';
import { BankDetailsInput } from './bank-details.input';
import { ClaimantInput } from './claimant.input';
import { DeceasedPersonInput } from './deceased-person.input';

@InputType('UpdateClaimInput')
export class UpdateClaimInput {
  @Field(() => CompanyDetailsInput, { nullable: true })
  @ValidateNested()
  @Type(() => CompanyDetailsInput)
  @IsOptional()
  companyDetails?: CompanyDetailsInput;

  @Field(() => ShareDetailsInput, { nullable: true })
  @ValidateNested()
  @Type(() => ShareDetailsInput)
  @IsOptional()
  shareDetails?: ShareDetailsInput;

  @Field(() => BankDetailsInput, { nullable: true })
  @ValidateNested()
  @Type(() => BankDetailsInput)
  @IsOptional()
  bankDetails?: BankDetailsInput;

  @Field(() => [ClaimantInput], { nullable: true })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ClaimantInput)
  @IsOptional()
  claimant?: ClaimantInput[];

  @Field(() => DeceasedPersonInput, { nullable: true })
  @ValidateNested()
  @Type(() => DeceasedPersonInput)
  @IsOptional()
  deceasedPerson?: DeceasedPersonInput;

  @Field(() => String, { nullable: true })
  @IsString()
  @IsOptional()
  dematAccountNumber?: string;
}
