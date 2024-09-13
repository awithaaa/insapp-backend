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
import { AddTeacherPaymentDto } from './dto/addTeacherPayment.dto';
import { EditTeacherPaymentDto } from './dto/editTeacherPayment.dto';

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

  // Teacher Payments
  @Post('payment')
  async addTeacherPayment(@Body() dto: AddTeacherPaymentDto) {
    return await this.teacherService.addTeacherPayment(dto);
  }

  @Get('payment/:id')
  async findTeacherPaymentById(@Param('id') id: number) {
    return await this.teacherService.findTeacherPaymentById(id);
  }

  @Get('payments/:id')
  async findAllTeacherPaymentById(@Param('id') id: number) {
    return await this.teacherService.findAllTeacherPaymentById(id);
  }

  @Patch('payment/:id')
  async editTeacherPaymentById(@Param('id') id: number, @Body() dto: EditTeacherPaymentDto) {
    return await this.teacherService.editTeacherPaymentById(id, dto);
  }

  @Delete('payment/:id')
  async deleteTeacherPaymentById(@Param('id') id: number) {
    return await this.teacherService.deleteTeacherPaymentById(id);
  }
}
