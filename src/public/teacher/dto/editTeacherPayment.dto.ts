import { Month } from '@prisma/client';
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';
import { Dto } from 'src/lib/dto/Dto';

export class EditTeacherPaymentDto extends Dto<EditTeacherPaymentDto> {
  @IsNumber()
  @IsOptional()
  teacherID?: number;

  @IsNumber()
  @IsOptional()
  classID?: number;

  @IsString()
  @IsOptional()
  month?: Month;

  @IsString()
  @IsOptional()
  year?: string;

  @IsNumber()
  @IsOptional()
  amount?: number;

  @IsNumber()
  @IsOptional()
  added?: number;
}
