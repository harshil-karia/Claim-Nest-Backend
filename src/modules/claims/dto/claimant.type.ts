import { Field, Int, ObjectType } from '@nestjs/graphql';
import { AddressType } from './address.type';

@ObjectType('Claimant')
export class ClaimantType {
  @Field(() => Int)
  orderNumber: number;

  @Field(() => String)
  firstName: string;

  @Field(() => String)
  middleName: string;

  @Field(() => String)
  lastName: string;

  @Field(() => String)
  email: string;

  @Field(() => String)
  phone: string;

  @Field(() => String)
  birthCountry: string;

  @Field(() => String)
  nationality: string;

  @Field(() => String)
  birthPlace: string;

  @Field(() => String)
  relation: string;

  @Field(() => Int)
  age: number;

  @Field(() => String)
  panNumber: string;

  @Field(() => AddressType)
  address: AddressType;
}
