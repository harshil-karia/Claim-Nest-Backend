import { Field, Float, Int, ObjectType } from '@nestjs/graphql';
import { SecurityDetailsType } from './security-details.type';

@ObjectType('ShareDetails')
export class ShareDetailsType {
  @Field(() => String)
  folioNumber: string;

  @Field(() => Int)
  numberOfShares: number;

  @Field(() => Float)
  faceValue: number;

  @Field(() => [SecurityDetailsType])
  securityNumbers: SecurityDetailsType[];

  @Field(() => [String])
  certificateNumber: string[];
}
