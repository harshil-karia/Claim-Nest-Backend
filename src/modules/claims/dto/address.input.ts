import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

@InputType('AddressInput')
export class AddressInput {
  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  addressLine1: string;

  @Field(() => String, { nullable: true })
  @IsString()
  @IsOptional()
  addressLine2?: string;

  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  city: string;

  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  state: string;

  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  zipcode: string;

  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  country: string;
}
