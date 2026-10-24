import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { type AuthenticatedRequest, type JwtPayload } from '../guards/jwt-auth.guard';

export const CurrentGqlUser = createParamDecorator(
  (data: keyof JwtPayload | undefined, context: ExecutionContext) => {
    const ctx = GqlExecutionContext.create(context);
    const { req } = ctx.getContext<{ req: AuthenticatedRequest }>();
    let user = req?.user;

    if (!user && req?.headers?.authorization) {
      try {
        const [type, token] = req.headers.authorization.split(' ');
        if (type === 'Bearer' && token) {
          const parts = token.split('.');
          if (parts.length === 3) {
            const base64 = parts[1].replace(/-/g, '+').replace(/_/g, '/');
            const jsonPayload = Buffer.from(base64, 'base64').toString('utf8');
            user = JSON.parse(jsonPayload) as JwtPayload;
            if (req) {
              req.user = user;
            }
          }
        }
      } catch {
        // Leave user undefined if token cannot be parsed
      }
    }

    return data && user ? user[data] : user;
  },
);
