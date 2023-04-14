import { Module } from '@nestjs/common';
import { MailService } from './mail.service';
import { MailController } from './mail.controler';

@Module({
  controllers: [MailController],
  providers: [MailService],
  exports: [MailService],
})
export class MailModule {}
