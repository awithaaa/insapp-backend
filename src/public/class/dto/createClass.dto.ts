import { Day, StudentGrade } from '@prisma/client';
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';
import { Dto } from 'src/lib/dto/Dto';

export class CreateClassDto extends Dto<CreateClassDto> {
  @IsString()
  @IsNotEmpty()
  subject: string;

  @IsNumber()
  @IsNotEmpty()
  teacherID: number;

  @IsString()
  @IsNotEmpty()
  grade: StudentGrade;

  @IsString()
  @IsNotEmpty()
  day: Day;

  @IsString()
  @IsNotEmpty()
  startTime: string;

  @IsString()
  @IsNotEmpty()
  endTime: string;

  @IsString()
  @IsNotEmpty()
  type: string;

  @IsNumber()
  @IsNotEmpty()
  perPayment: number;

  @IsNumber()
  @IsNotEmpty()
  perTeacher: number;

  @IsNumber()
  @IsNotEmpty()
  perClass: number;

  @IsNumber()
  @IsOptional()
  totalAmount?: number;

  @IsNumber()
  @IsNotEmpty()
  added: number;
}
