import { Field, ObjectType } from '@nestjs/graphql';
import { AddressType } from './address.type';

@ObjectType('BankDetails')
export class BankDetailsType {
  @Field(() => String)
  accountNumber: string;

  @Field(() => String)
  bankName: string;

  @Field(() => String)
  branchName: string;

  @Field(() => String)
  ifscCode: string;

  @Field(() => String)
  phone: string;

  @Field(() => String)
  email: string;

  @Field(() => [String])
  accountHolderName: string[];

  @Field(() => String)
  micrNumber: string;

  @Field(() => AddressType)
  address: AddressType;
}
