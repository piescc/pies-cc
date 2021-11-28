import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {

  @Get()
  getHello(): string {
    return "<h1>Hello from pies.cc!</h1>"
  }
}
