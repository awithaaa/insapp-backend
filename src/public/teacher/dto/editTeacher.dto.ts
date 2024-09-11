import { Gender } from '@prisma/client';
import { IsOptional, IsString } from 'class-validator';
import { Dto } from 'src/lib/dto/Dto';

export class TeacherEditDto extends Dto<TeacherEditDto> {
  @IsString()
  @IsOptional()
  firstName?: string;

  @IsString()
  @IsOptional()
  lastName?: string;

  @IsString()
  @IsOptional()
  email?: string;

  @IsString()
  @IsOptional()
  gender?: Gender;

  @IsString()
  @IsOptional()
  contactNo?: string;

  @IsString()
  @IsOptional()
  dateOfBirth?: string;
}
