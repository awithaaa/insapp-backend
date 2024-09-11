import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { TeacherService } from './teacher.service';
import { CreateTeacherDto } from './dto/createTeacher.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';

@Controller('teacher')
export class TeacherController {
  constructor(private readonly teacherService: TeacherService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  async createTeacher(@Body() dto: CreateTeacherDto) {
    return await this.teacherService.createTeacher(dto);
  }
}
