import { Month } from '@prisma/client';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { Dto } from 'src/lib/dto/Dto';

export class AddTeacherPaymentDto extends Dto<AddTeacherPaymentDto> {
  @IsNumber()
  @IsNotEmpty()
  teacherID: number;

  @IsNumber()
  @IsNotEmpty()
  classID: number;

  @IsString()
  @IsNotEmpty()
  month: Month;

  @IsString()
  @IsNotEmpty()
  year: string;

  @IsNumber()
  @IsNotEmpty()
  amount: number;

  @IsNumber()
  @IsNotEmpty()
  added: number;
}
