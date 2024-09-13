import { Month } from '@prisma/client';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { Dto } from 'src/lib/dto/Dto';

export class AddStudentPaymentDto extends Dto<AddStudentPaymentDto> {
  @IsNumber()
  @IsNotEmpty()
  studentID: number;

  @IsNumber()
  @IsNotEmpty()
  classID: number;

  @IsString()
  @IsNotEmpty()
  month: Month;

  @IsNumber()
  @IsNotEmpty()
  amount: number;

  @IsNumber()
  @IsNotEmpty()
  added: number;
}
