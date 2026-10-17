import { Field, ObjectType } from '@nestjs/graphql';
import { AddressType } from './address.type';

@ObjectType('CompanyDetails')
export class CompanyDetailsType {
  @Field(() => String)
  name: string;

  @Field(() => AddressType)
  address: AddressType;
}
