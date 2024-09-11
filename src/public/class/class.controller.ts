import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';
import { ClassService } from './class.service';
import { CreateClassDto } from './dto/createClass.dto';

@Controller('class')
@UseGuards(JwtAuthGuard)
export class ClassController {
  constructor(private readonly classService: ClassService) {}

  @Post()
  async createClass(@Body() dto: CreateClassDto) {
    return await this.classService.createClass(dto);
  }

  @Get()
  async findClassById(@Query('cid') id: number) {
    return await this.classService.findClassById(id);
  }

  @Get('all')
  async findAllClasses() {
    return await this.classService.findAllClasses();
  }

  @Patch(':id')
  async editClassById(@Param('id') id: number, dto) {
    return await this.classService.editClassById(id, dto);
  }

  @Delete(':id')
  async deleteClassById(@Param('id') id: number) {
    return await this.classService.deleteClassById(id);
  }
}
