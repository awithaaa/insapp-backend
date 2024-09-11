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
import { TeacherService } from './teacher.service';
import { CreateTeacherDto } from './dto/createTeacher.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';
import { TeacherEditDto } from './dto/editTeacher.dto';

@Controller('teacher')
@UseGuards(JwtAuthGuard)
export class TeacherController {
  constructor(private readonly teacherService: TeacherService) {}

  @Post()
  async createTeacher(@Body() dto: CreateTeacherDto) {
    return await this.teacherService.createTeacher(dto);
  }

  @Get()
  async findTeacherById(@Query('tid') tid: number) {
    return await this.teacherService.findTeacherById(tid);
  }

  @Get('all')
  async findAllTeachers() {
    return await this.teacherService.findAllTeachers();
  }

  @Patch(':id')
  async editTeacherById(@Param('id') id: number, @Body() dto: TeacherEditDto) {
    return await this.teacherService.editTeacherById(id, dto);
  }

  @Delete(':id')
  async deleteTeacherById(@Param('id') id: number) {
    return await this.teacherService.deleteTeacherById(id);
  }
}
