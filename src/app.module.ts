import { Module, OnApplicationBootstrap, OnModuleInit } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostsModule } from './posts/posts.module';
import envConfig from '../config/env';


@Module({
  imports: [PostsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements OnModuleInit,OnApplicationBootstrap {
  onModuleInit(){}
  onApplicationBootstrap(){}
}
