import { Field, Float, Int, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import {
  ArrayNotEmpty,
  IsArray,
  IsNotEmpty,
  IsNumber,
  IsString,
  Min,
  ValidateNested,
} from 'class-validator';
import { SecurityDetailsInput } from './security-details.input';

@InputType('ShareDetailsInput')
export class ShareDetailsInput {
  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  folioNumber: string;

  @Field(() => Int)
  @IsNumber()
  @Min(0)
  numberOfShares: number;

  @Field(() => Float)
  @IsNumber()
  @Min(0)
  faceValue: number;

  @Field(() => [SecurityDetailsInput])
  @IsArray()
  @ArrayNotEmpty()
  @ValidateNested({ each: true })
  @Type(() => SecurityDetailsInput)
  securityNumbers: SecurityDetailsInput[];

  @Field(() => [String])
  @IsArray()
  @ArrayNotEmpty()
  @IsString({ each: true })
  certificateNumber: string[];
}
