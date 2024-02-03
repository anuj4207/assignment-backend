import { Body, Controller, Get, Post } from '@nestjs/common';
import { DataService } from './data.service';

@Controller('data')
export class DataController {
  constructor(private dataservice: DataService) {}
  @Post('add')
  addData(@Body() dto: any) {
    return this.dataservice.addData(dto.data);
  }
  @Post('update')
  updateData(@Body() dto: any) {
    return this.dataservice.updateData(dto.data, dto.id);
  }
  @Get('myData')
  fetchData() {
    return this.dataservice.getData();
  }
}
