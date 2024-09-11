import { IsNumber, IsOptional } from 'class-validator';
import { Dto } from 'src/lib/dto/Dto';

export class UpdateStuClsDto extends Dto<UpdateStuClsDto> {
  @IsNumber()
  @IsOptional()
  classId: number;
}
