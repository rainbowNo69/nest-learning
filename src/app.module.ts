import { MiddlewareConsumer, Module, NestModule, OnApplicationBootstrap, OnModuleInit } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostsModule } from './posts/posts.module';
import envConfig from '../config/env';
import { LogMiddleware } from './log.middleware';

@Module({
  imports: [PostsModule],
controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements OnModuleInit,OnApplicationBootstrap,NestModule {
  onModuleInit(){}
  onApplicationBootstrap(){}
  configure(consumer:MiddlewareConsumer){
    consumer.apply(LogMiddleware).forRoutes('app*')
  }
}
