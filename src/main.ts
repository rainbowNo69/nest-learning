import { NestFactory } from '@nestjs/core';
import { VersioningType } from '@nestjs/common';
import { AppModule } from './app.module';
import * as session from 'express-session'
import { NextFunction } from 'express';
 

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(session({ secret: "XiaoMan", name: "xm.session", rolling: true, cookie: { maxAge: null } }))
  app.use(function(req: Request, res: Response, next: NextFunction) {
    console.log('全局before', req.url);
    next();
    console.log('全局after');
  })

  app.enableVersioning({
    type: VersioningType.URI,
  })
  await app.listen(3000);
}
bootstrap();