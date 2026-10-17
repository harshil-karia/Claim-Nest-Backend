import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import {
  ArrayNotEmpty,
  IsArray,
  IsEmail,
  IsNotEmpty,
  IsString,
  ValidateNested,
} from 'class-validator';
import { AddressInput } from './address.input';

@InputType('BankDetailsInput')
export class BankDetailsInput {
  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  accountNumber: string;

  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  bankName: string;

  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  branchName: string;

  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  ifscCode: string;

  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  phone: string;

  @Field(() => String)
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @Field(() => [String])
  @IsArray()
  @ArrayNotEmpty()
  @IsString({ each: true })
  accountHolderName: string[];

  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  micrNumber: string;

  @Field(() => AddressInput)
  @ValidateNested()
  @Type(() => AddressInput)
  address: AddressInput;
}
