import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateTeacherDto } from './dto/createTeacher.dto';

@Injectable()
export class TeacherService {
  constructor(private readonly prismaService: PrismaService) {}

  async createTeacher(dto: CreateTeacherDto) {
    const teacher = await this.prismaService.teacher.create({
      data: {
        ...dto,
      },
    });

    return {
      message: 'Teacher Registered Successfully!',
      teacher: teacher,
    };
  }

  async findTeacherById(id: number) {
    const teacher = await this.prismaService.teacher.findUnique({
      where: {
        id: id,
      },
    });
    if (!teacher) throw new NotFoundException('Teacher Not Found!');

    return teacher;
  }

  async findAllTeachers() {
    const teachers = await this.prismaService.teacher.findMany({
      select: {
        id: true,
        firstName: true,
        lastName: true,
        gender: true,
        contactNo: true,
      },
    });
  }
}
