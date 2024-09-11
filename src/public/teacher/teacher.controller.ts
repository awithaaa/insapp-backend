import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { TeacherService } from './teacher.service';
import { CreateTeacherDto } from './dto/createTeacher.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';

@Controller('teacher')
@UseGuards(JwtAuthGuard)
export class TeacherController {
  constructor(private readonly teacherService: TeacherService) {}

  @Post()
  async createTeacher(@Body() dto: CreateTeacherDto) {
    return await this.teacherService.createTeacher(dto);
  }

  @Get()
  async findTeacherById(@Param() tid: number) {
    return await this.teacherService.findTeacherById(tid);
  }

  @Get('all')
  async findAllTeachers() {
    return await this.teacherService.findAllTeachers();
  }
}
