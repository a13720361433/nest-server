import { Controller, Get, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('feedback')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    console.log('getHello');
    return this.appService.getHello();
  }

  @Post('sendMessage')
  sendMessage(@Body() params) {
    console.log('parmas', params);
    return this.appService.sendMessage(params);
  }
}
