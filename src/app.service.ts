import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): object {
    console.log('getHello')
    return {
      code:200,
      data:[
        {name:1},
        {name:2},
        {name:3},
      ]
    };
  }
}
