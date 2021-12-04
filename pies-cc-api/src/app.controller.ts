import { Controller, Get, Req, Res } from '@nestjs/common';

@Controller()
export class AppController {

  @Get()
  getHello(@Req() req, @Res() res){
    if (req.headers["user-agent"] && req.headers["user-agent"].toLowerCase().indexOf("discord") !== -1) {
      return res.send(`
      <title>pies.cc ${req.url}</title>
      <meta content="#2F3136" data-react-helmet="true" name="theme-color" />
      `)
    }
    return res.end("<h1>Hello from pies-cc!</h1>")
  }
}