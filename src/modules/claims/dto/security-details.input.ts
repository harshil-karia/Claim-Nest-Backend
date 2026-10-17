import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsString } from 'class-validator';

@InputType('SecurityDetailsInput')
export class SecurityDetailsInput {
  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  from: string;

  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  to: string;
}
