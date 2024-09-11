import { Gender } from '@prisma/client';
import { IsEmail, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { Dto } from 'src/lib/dto/Dto';

export class CreateTeacherDto extends Dto<CreateTeacherDto> {
  @IsString()
  @IsNotEmpty()
  firstName: string;

  @IsString()
  @IsNotEmpty()
  lastName: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  gender: Gender;

  @IsString()
  @IsNotEmpty()
  contactNo: string;

  @IsString()
  @IsNotEmpty()
  dateOfBirth: string;

  @IsNumber()
  @IsNotEmpty()
  added: number;
}
