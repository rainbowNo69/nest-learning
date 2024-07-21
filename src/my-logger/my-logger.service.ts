import { ConsoleLogger, Injectable, } from '@nestjs/common';
import * as fs from 'fs'
import * as path from 'path'
import {promises as fsPromises} from 'fs'
@Injectable()
export class MyLoggerService extends ConsoleLogger  {
  async logToFile(entry){
    const formatedEntry = `${Intl.DateTimeFormat('en-US',{
      dateStyle:'short',
      timeStyle:'short',
      timeZone:'America/Chicago'
    }).format(new Date())}\t${entry}`

    try{
      //创建文件夹 先判断如果不存在则创建
      if(!fs.existsSync(path.join(__dirname,'..','..','logs'))){
        await fsPromises.mkdir(path.join(__dirname,'..','..','logs'))
      }
      await fsPromises.appendFile(path.join(__dirname,'..','..','logs','myLogFile.log'),formatedEntry)
    }catch(e){
      if(e instanceof Error){console.error(e.message)}
    }
  }

  log(message:any,context?:String){
    const entry = `${context}\t${message}`
    this.logToFile(entry)
    super.log(message,context)
  }

  error(message: any, stackOrContext?: string): void;
  error(message: any, stack?: string, context?: string): void;
  error(message: any, ...optionalParams: [...any, string?, string?]): void;
  error(message: unknown, stack?: unknown, context?: unknown, ...rest: unknown[]): void {
      const entry = `${context}\t${message}`
      this.logToFile(entry)
      super.error(message)
  }
}
