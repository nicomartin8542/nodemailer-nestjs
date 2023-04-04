import { IsString, IsEmail } from 'class-validator';

export class DataMail {
  @IsString()
  @IsEmail()
  email: string;

  @IsString()
  userName: string;

  @IsString()
  url: string;

  @IsString()
  subject: string;
}
