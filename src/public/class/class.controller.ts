import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  Req,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';
import { ClassService } from './class.service';
import { CreateClassDto } from './dto/createClass.dto';
import { UpdateClassDto } from './dto/updateClass.dto';
import { UpdateStuClsDto } from './dto/updateStudentClass.dto';

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
  async editClassById(@Param('id') id: number, dto: UpdateClassDto) {
    return await this.classService.editClassById(id, dto);
  }

  @Delete(':id')
  async deleteClassById(@Param('id') id: number) {
    return await this.classService.deleteClassById(id);
  }

  // Add Students into classes
  @Post('student')
  async addStudentClass(@Body() body, @Req() req) {
    return await this.classService.addStudentClass(
      body.studentId,
      body.classId,
      req.user.userId.id,
    );
  }

  @Get('student/:id')
  async findStudentClassById(@Param('id') id: number) {
    return await this.classService.findStudentClassById(id);
  }

  @Get('student')
  async findStudentClassBySid(@Query('sid') id: number) {
    return await this.classService.findStudentClassBySid(id);
  }

  @Patch('student/:id')
  async editStudentClassById(@Param('id') id: number, @Body() dto: UpdateStuClsDto) {
    return await this.classService.editStudentClassById(id, dto);
  }

  @Delete('student/:id')
  async deleteStudentClassById(@Param('id') id: number) {
    return await this.classService.deleteStudentClassById(id);
  }
}
