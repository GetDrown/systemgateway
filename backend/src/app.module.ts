import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PassportModule } from '@nestjs/passport';
import { AuthenticationMiddleware } from './auth/auth.middleware';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [AuthModule, TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'dnsc123..',
    database: 'gatewaydb',
    autoLoadEntities: true,
    synchronize: true,
  }),
    PassportModule.register({ session: true }),
    JwtModule.register({
      secret: 'securedSecret123!!!#',
      signOptions: { expiresIn: '1m'}
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
 
}
