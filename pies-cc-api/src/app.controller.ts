import { Controller, Get, Req, Res } from '@nestjs/common';

@Controller()
export class AppController {

  @Get()
  getHello(@Req() req, @Res() res){
    if (req.headers["user-agent"] && req.headers["user-agent"].toLowerCase().contains("discord")) {

    }
    return res.end("<h1>Hello from pies-cc!</h1>")
  }
}
