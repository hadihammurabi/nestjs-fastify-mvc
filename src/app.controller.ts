import { Controller, Get, Render, Query } from '@nestjs/common';

@Controller()
export class AppController {

  @Get()
  @Render('index')
  getHello(@Query('name') name: String) {
    return {
      name: name || 'Gue',
    };
  }
}
