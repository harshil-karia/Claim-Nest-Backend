import { Field, Int, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import {
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsString,
  Min,
  ValidateNested,
} from 'class-validator';
import { AddressInput } from './address.input';

@InputType('ClaimantInput')
export class ClaimantInput {
  @Field(() => Int)
  @IsNumber()
  @Min(1)
  orderNumber: number;

  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  firstName: string;

  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  middleName: string;

  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  lastName: string;

  @Field(() => String)
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  phone: string;

  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  birthCountry: string;

  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  nationality: string;

  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  birthPlace: string;

  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  relation: string;

  @Field(() => Int)
  @IsNumber()
  @Min(0)
  age: number;

  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  panNumber: string;

  @Field(() => AddressInput)
  @ValidateNested()
  @Type(() => AddressInput)
  address: AddressInput;
}
