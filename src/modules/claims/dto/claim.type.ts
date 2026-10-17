import { Field, ID, ObjectType } from '@nestjs/graphql';
import { CompanyDetailsType } from './company-details.type';
import { ShareDetailsType } from './share-details.type';
import { BankDetailsType } from './bank-details.type';
import { ClaimantType } from './claimant.type';
import { DeceasedPersonType } from './deceased-person.type';

@ObjectType('Claim')
export class ClaimType {
  @Field(() => ID)
  id: string;

  @Field(() => CompanyDetailsType)
  companyDetails: CompanyDetailsType;

  @Field(() => ShareDetailsType)
  shareDetails: ShareDetailsType;

  @Field(() => BankDetailsType)
  bankDetails: BankDetailsType;

  @Field(() => [ClaimantType])
  claimant: ClaimantType[];

  @Field(() => DeceasedPersonType)
  deceasedPerson: DeceasedPersonType;

  @Field(() => String)
  dematAccountNumber: string;

  @Field(() => ID)
  userId: string;

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date)
  updatedAt: Date;
}
