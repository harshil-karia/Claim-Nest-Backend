import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { Request, Response } from 'express';
import { ApolloResolver } from './apollo.resolver';

@Module({
  imports: [
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        const isDev = configService.get<string>('app.nodeEnv') !== 'production';

        return {
          autoSchemaFile: true,
          playground: isDev,
          introspection: true,
          context: ({ req, res }: { req: Request; res: Response }) => ({ req, res }),
        };
      },
    }),
  ],
  providers: [ApolloResolver],
  exports: [GraphQLModule],
})
export class ApolloModule {}
