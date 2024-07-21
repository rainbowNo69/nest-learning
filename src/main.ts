import { NestFactory } from '@nestjs/core';
import { VersioningType } from '@nestjs/common';
import { AppModule } from './app.module';
import * as session from 'express-session'
import { NextFunction } from 'express';
import { LoginGuard } from './login.guard';
// import { MyLoggerService } from './my-logger/my-logger.service';
 

async function bootstrap() {
  const app = await NestFactory.create(AppModule,
  // {
  //   bufferLogs:true
  // }
);
  // app.useLogger(app.get(MyLoggerService))

  app.use(session({ secret: "XiaoMan", name: "xm.session", rolling: true, cookie: { maxAge: null } }))
  app.use(function(req: Request, res: Response, next: NextFunction) {
    // console.log('全局before', req.url);
    next();
    // console.log('全局after');
  })

  app.enableVersioning({
    type: VersioningType.URI,
  })
  // app.useGlobalGuards(new LoginGuard())
  await app.listen(3000);
}
bootstrap();