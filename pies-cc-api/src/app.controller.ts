import { Controller, Get, Req } from '@nestjs/common';

@Controller()
export class AppController {

  @Get()
  getHello(@Req() req): string {
    console.log(req.headers["User-Agent"])
    return "<h1>Hello from pies-cc!</h1>"
  }
}
