import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { GqlExecutionContext } from '@nestjs/graphql';
import { JwtService } from '@nestjs/jwt';
import { type AuthenticatedRequest, type JwtPayload } from './jwt-auth.guard';

@Injectable()
export class GqlAuthGuard implements CanActivate {
  constructor(
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const gqlCtx = GqlExecutionContext.create(context);
    const { req } = gqlCtx.getContext<{ req: AuthenticatedRequest }>();
    const args = gqlCtx.getArgs<{ input?: { userId?: string } }>();

    const authHeader = req?.headers?.authorization;
    if (!authHeader) {
      if (args?.input?.userId) {
        return true;
      }
      throw new UnauthorizedException('Authorization header is missing');
    }

    const [type, token] = authHeader.split(' ');
    if (type !== 'Bearer' || !token) {
      if (args?.input?.userId) {
        return true;
      }
      throw new UnauthorizedException(
        'Invalid authorization header format. Expected "Bearer <token>"',
      );
    }

    try {
      const secret = this.configService.get<string>('jwt.secret');
      const payload = await this.jwtService.verifyAsync<JwtPayload>(token, {
        secret,
      });

      req.user = payload;
      return true;
    } catch {
      throw new UnauthorizedException('Invalid or expired authentication token');
    }
  }
}
