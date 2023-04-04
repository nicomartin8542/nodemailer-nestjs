import { Injectable, BadRequestException } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
import { Data } from './interfaces/data-mail.interface';
import { join } from 'path';

@Injectable()
export class MailService {
  constructor(private readonly mailerService: MailerService) {}

  async sendMail(data: Data) {
    const { email, subject, userName, url } = data;

    console.log(process.env.MAIL_USER);

    try {
      await this.mailerService.sendMail({
        to: email,
        subject,
        template: './confirmation',
        context: {
          name: userName,
          url,
        },
      });
      return true;
    } catch (error) {
      console.log(error);
      this.handleError(error);
    }
  }

  private handleError(error: any): never {
    throw new BadRequestException(error.detail);
  }
}
