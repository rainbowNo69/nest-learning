import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';

export class AaaException{
  constructor(public aaa:string,public bbb:string){

  }
}

@Catch(AaaException)
export class AaaFilter<T> implements ExceptionFilter {
  catch(exception: T, host: ArgumentsHost) {
    console.log(exception,host)
  }
}
