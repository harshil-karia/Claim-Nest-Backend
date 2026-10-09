import { Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class ApolloResolver {
  @Query(() => String, { description: 'Health check endpoint' })
  health(): string {
    return 'Claim Nest GraphQL API is operational';
  }
}
