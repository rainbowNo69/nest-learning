import { Controller, Get, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { LoginGuard } from './login.guard';

// 主路径为 app
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("app")
  @UseGuards(LoginGuard)
  getHello(): object {
    console.log('get /app')
    return this.appService.getHello();
  }
}
