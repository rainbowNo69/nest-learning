import {MiddlewareConsumer,Module,NestModule,OnApplicationBootstrap,OnModuleInit,} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostsModule } from './posts/posts.module';
import envConfig from '../config/env';
import { LogMiddleware } from './log.middleware';
// import { APP_GUARD } from '@nestjs/core';
// import { LoginGuard } from './login.guard';
import { DatabaseModule } from './database/database.module';
import { EmployeeModule } from './employee/employee.module';
import {ThrottlerModule, Throttle, ThrottlerGuard } from '@nestjs/throttler';
import { APP_GUARD } from '@nestjs/core';
@Module({
  imports: [PostsModule, DatabaseModule, EmployeeModule,
    ThrottlerModule.forRoot([{
      name:'long',
      ttl:60000,
      limit:3
    }])
  ],
  controllers: [AppController],
  providers: [
    AppService,
    // {
    //   provide:APP_GUARD,
    //   useClass:LoginGuard
    // }
    {
      provide:APP_GUARD,
      useClass:ThrottlerGuard
    }
  ],
})
export class AppModule
  implements OnModuleInit, OnApplicationBootstrap, NestModule
{
  onModuleInit() {}
  onApplicationBootstrap() {}
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LogMiddleware).forRoutes('app*');
  }
}
