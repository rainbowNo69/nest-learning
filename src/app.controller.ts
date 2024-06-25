import { Controller, Get, UseGuards, UseInterceptors } from '@nestjs/common';
import { AppService } from './app.service';
import { LoginGuard } from './login.guard';
import { PostsService } from './posts/posts.service';
import { TimeInterceptor } from './time.interceptor';

// 主路径为 app
@Controller()
export class AppController {
  constructor(private readonly appService: AppService,private postsService:PostsService) {}

  @Get("app")
  // @UseGuards(LoginGuard)
  @UseInterceptors(TimeInterceptor)
  getHello(): object {
    // return this.postsService.sayService()
    return this.appService.getHello();
  }
}
