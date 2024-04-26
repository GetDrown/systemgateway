import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { GoogleStrategy } from '../utils/google.strategy';
import { AuthService } from './auth.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from 'src/user/user.entity';
import { SessionSerializer } from './serializer';
import { AuthenticationMiddleware } from './auth.middleware';

@Module({
  imports: [
    TypeOrmModule.forFeature([Users])
  ],
  controllers: [AuthController],
  providers: [GoogleStrategy, SessionSerializer, {
    provide: 'AUTH_SERVICE',
    useClass: AuthService
  }]
})
export class AuthModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthenticationMiddleware).forRoutes({ path: '/api/auth/google/login', method: RequestMethod.GET });
  }
 }
