import { IsEmail, IsString, MinLength } from 'class-validator';
import { Unique } from 'typeorm';

export class CreateUserDto {
  @IsString()
  @MinLength(3)
  name: string;

  @IsEmail()
  @Unique(['email'])
  email: string;

  @IsString()
  @MinLength(3)
  password: string;
}
