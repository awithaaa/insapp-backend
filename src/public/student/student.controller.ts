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
import { StudentService } from './student.service';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';
import { StudentRegisterDto } from './dto/student-register.dto';
import { StudentEditDto } from './dto/student-edit.dto';
import { AddStudentPaymentDto } from './dto/addStudentPayment.dto';
import { EditStudentPaymentDto } from './dto/editStudentPayment.dto';

@UseGuards(JwtAuthGuard)
@Controller('student')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Post()
  async studentRegister(@Body() dto: StudentRegisterDto) {
    return await this.studentService.studentRegister(dto);
  }

  @Get()
  async findAllStudent() {
    return await this.studentService.findAllStudent();
  }

  @Get(':id')
  async findStudentById(@Param('id') id: number) {
    return await this.studentService.findStudentById(id);
  }

  @Patch(':id')
  async editStudentById(@Param('id') id: number, @Body() dto: StudentEditDto) {
    return await this.studentService.editStudentById(id, dto);
  }

  @Delete(':id')
  async deleteStudentById(@Param('id') id: number) {
    return await this.studentService.deleteStudentById(id);
  }

  // Student Payment
  @Post('payment')
  async addStudentPayment(@Body() dto: AddStudentPaymentDto) {
    return await this.studentService.addStudentPayment(dto);
  }

  @Get('payment/:id')
  async findStudentPaymentById(@Param('id') id: number) {
    return await this.studentService.findStudentPaymentById(id);
  }

  @Get('payment')
  async findAllStudentPaymentById(@Query('id') id: number) {
    return await this.studentService.findAllStudentPaymentById(id);
  }

  @Patch('payment/:id')
  async editStudentPaymentById(@Param('id') id: number, @Body() dto: EditStudentPaymentDto) {
    return await this.studentService.editStudentPaymentById(id, dto);
  }

  @Delete('payment/:id')
  async deleteStudentPaymentById(@Param('id') id: number) {
    return await this.studentService.deleteStudentPaymentById(id);
  }
}
