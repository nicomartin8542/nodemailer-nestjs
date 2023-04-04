import { Module } from '@nestjs/common';
import { MailService } from './mail.service';
import { MailerModule } from '@nestjs-modules/mailer';
import { mailerData } from './data/mailer.data';

@Module({
  imports: [MailerModule.forRoot(mailerData)],
  providers: [MailService],
  exports: [MailService],
})
export class MailModule {}
