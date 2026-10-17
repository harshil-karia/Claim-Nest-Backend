import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType('SecurityDetails')
export class SecurityDetailsType {
  @Field(() => String)
  from: string;

  @Field(() => String)
  to: string;
}
