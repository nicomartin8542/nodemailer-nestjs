import { Module } from '@nestjs/common';
import { MailModule } from './mail/mail.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { CommonModule } from './common/common.module';
import { MailerModule } from '@nestjs-modules/mailer';
import { mailerData } from './mail/data/mailer.data';

@Module({
  imports: [
    MailModule,
    ConfigModule.forRoot(),
    CommonModule,
    MailerModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: mailerData,
    }),
  ],
})
export class AppModule {}
