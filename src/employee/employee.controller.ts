import { Controller, Get, Post, Body, Patch, Param, Delete, Query,Ip } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { Prisma } from '@prisma/client';
import { SkipThrottle } from '@nestjs/throttler';
import { MyLoggerService } from 'src/my-logger/my-logger.service';


@Controller('employee')
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService,private logger:MyLoggerService) {}
  // private readonly logger = new MyLoggerService(EmployeeController.name)

  @Post()
  create(@Body() createEmployeeDto: Prisma.EmployeeCreateInput) {
    return this.employeeService.create(createEmployeeDto);
  }

  @SkipThrottle({'long':true})
  @Get()
  findAll(@Ip() ip,@Query('role') role?) {
    this.logger.log('findAll',`${ip}`)
    return this.employeeService.findAll(role);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.employeeService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEmployeeDto: Prisma.EmployeeUpdateInput) {
    return this.employeeService.update(+id, updateEmployeeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.employeeService.remove(+id);
  }
}
