import { Controller, Get, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { MailService } from './mail/mail.service';
import { DataMail } from './dto/data-mail.dto';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly mailService: MailService,
  ) {}

  @Post('send')
  async send(@Body() data: DataMail) {
    await this.mailService.sendMail(data);
    return 'succes';
  }
}
