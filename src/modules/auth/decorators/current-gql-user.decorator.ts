import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { type AuthenticatedRequest, type JwtPayload } from '../guards/jwt-auth.guard';

export const CurrentGqlUser = createParamDecorator(
  (data: keyof JwtPayload | undefined, context: ExecutionContext) => {
    const ctx = GqlExecutionContext.create(context);
    const { req } = ctx.getContext<{ req: AuthenticatedRequest }>();
    const user = req?.user;

    return data && user ? user[data] : user;
  },
);
