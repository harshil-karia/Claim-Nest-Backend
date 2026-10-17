import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { IsDate, IsNotEmpty, IsOptional, IsString } from 'class-validator';

@InputType('DeceasedPersonInput')
export class DeceasedPersonInput {
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

  @Field(() => Date)
  @Type(() => Date)
  @IsDate()
  dateOfDemise: Date;

  @Field(() => String, { nullable: true })
  @IsString()
  @IsOptional()
  alternateName?: string;
}
