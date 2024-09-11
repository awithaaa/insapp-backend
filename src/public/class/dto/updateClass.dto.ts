import { Day, StudentGrade } from '@prisma/client';
import { IsNumber, IsOptional, IsString } from 'class-validator';
import { Dto } from 'src/lib/dto/Dto';

export class UpdateClassDto extends Dto<UpdateClassDto> {
  @IsString()
  @IsOptional()
  subject?: string;

  @IsNumber()
  @IsOptional()
  teacherID?: number;

  @IsString()
  @IsOptional()
  grade?: StudentGrade;

  @IsString()
  @IsOptional()
  day?: Day;

  @IsString()
  @IsOptional()
  startTime?: string;

  @IsString()
  @IsOptional()
  endTime?: string;

  @IsString()
  @IsOptional()
  type?: string;

  @IsNumber()
  @IsOptional()
  perPayment?: number;

  @IsNumber()
  @IsOptional()
  perTeacher?: number;

  @IsNumber()
  @IsOptional()
  perClass?: number;
}
