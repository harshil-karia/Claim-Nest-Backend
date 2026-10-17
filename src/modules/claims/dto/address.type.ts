import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType('Address')
export class AddressType {
  @Field(() => String)
  addressLine1: string;

  @Field(() => String, { nullable: true })
  addressLine2?: string;

  @Field(() => String)
  city: string;

  @Field(() => String)
  state: string;

  @Field(() => String)
  zipcode: string;

  @Field(() => String)
  country: string;
}
