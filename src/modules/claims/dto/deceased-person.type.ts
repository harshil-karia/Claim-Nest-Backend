import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType('DeceasedPerson')
export class DeceasedPersonType {
  @Field(() => String)
  firstName: string;

  @Field(() => String)
  middleName: string;

  @Field(() => String)
  lastName: string;

  @Field(() => Date)
  dateOfDemise: Date;

  @Field(() => String, { nullable: true })
  alternateName?: string;
}
