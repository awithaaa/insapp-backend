import { Month } from '@prisma/client';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { Dto } from 'src/lib/dto/Dto';

export class AddStudentPaymentDto extends Dto<AddStudentPaymentDto> {
  @IsNumber()
  @IsNotEmpty()
  studentID: number;

  @IsNumber()
  @IsNotEmpty()
  classId: number;

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
