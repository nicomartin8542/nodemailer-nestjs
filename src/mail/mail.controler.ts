import { Controller, Post, Body } from '@nestjs/common';
import { DataMail } from './dto/data-mail.dto';
import { MailService } from './mail.service';

@Controller()
export class MailController {
  constructor(private readonly mailService: MailService) {}

  @Post('send')
  async send(@Body() data: DataMail) {
    await this.mailService.sendMail(data);
    return 'succes';
  }
}
