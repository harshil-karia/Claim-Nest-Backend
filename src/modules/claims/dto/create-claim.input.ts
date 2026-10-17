import { Field, ID, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import {
  ArrayNotEmpty,
  IsArray,
  IsNotEmpty,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { CompanyDetailsInput } from './company-details.input';
import { ShareDetailsInput } from './share-details.input';
import { BankDetailsInput } from './bank-details.input';
import { ClaimantInput } from './claimant.input';
import { DeceasedPersonInput } from './deceased-person.input';

@InputType('CreateClaimInput')
export class CreateClaimInput {
  @Field(() => CompanyDetailsInput)
  @ValidateNested()
  @Type(() => CompanyDetailsInput)
  companyDetails: CompanyDetailsInput;

  @Field(() => ShareDetailsInput)
  @ValidateNested()
  @Type(() => ShareDetailsInput)
  shareDetails: ShareDetailsInput;

  @Field(() => BankDetailsInput)
  @ValidateNested()
  @Type(() => BankDetailsInput)
  bankDetails: BankDetailsInput;

  @Field(() => [ClaimantInput])
  @IsArray()
  @ArrayNotEmpty()
  @ValidateNested({ each: true })
  @Type(() => ClaimantInput)
  claimant: ClaimantInput[];

  @Field(() => DeceasedPersonInput)
  @ValidateNested()
  @Type(() => DeceasedPersonInput)
  deceasedPerson: DeceasedPersonInput;

  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  dematAccountNumber: string;

  @Field(() => ID, { nullable: true })
  @IsString()
  @IsOptional()
  userId?: string;
}
