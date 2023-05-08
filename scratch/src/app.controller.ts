import { Controller, Get } from '@nestjs/common';

@Controller('/api')
export class AppController {
  @Get('/heathcheck')
  getRooRoute() {
    return 'hi there';
  }

  @Get('/bye')
  getByeThere() {
    return 'bye there';
  }
}