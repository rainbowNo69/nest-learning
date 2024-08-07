import { Module } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { EmployeeController } from './employee.controller';
import { DatabaseModule } from 'src/database/database.module';
import { MyLoggerModule } from 'src/my-logger/my-logger.module';
@Module({
  imports:[DatabaseModule,MyLoggerModule],
  controllers: [EmployeeController],
  providers: [EmployeeService],
})
export class EmployeeModule {}
