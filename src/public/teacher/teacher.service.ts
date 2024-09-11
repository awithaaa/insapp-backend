import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateTeacherDto } from './dto/createTeacher.dto';
import { TeacherEditDto } from './dto/editTeacher.dto';

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

    return teachers;
  }

  async editTeacherById(id: number, dto: TeacherEditDto) {
    const teacher = await this.prismaService.teacher.findUnique({
      where: {
        id: id,
      },
    });
    if (!teacher) throw new NotFoundException('Teacher Not Found.');

    const updateTeacher = await this.prismaService.teacher.update({
      where: {
        id: teacher.id,
      },
      data: {
        ...dto,
      },
    });

    return {
      message: 'Teacher Updated Successfully.',
      teacher: updateTeacher,
    };
  }

  async deleteTeacherById(id: number) {
    const teacher = await this.prismaService.teacher.findUnique({
      where: {
        id: id,
      },
    });
    if (!teacher) throw new NotFoundException('Teacher Not Found.');

    const deleteTeacher = await this.prismaService.teacher.delete({
      where: {
        id: id,
      },
    });

    return {
      message: 'Teacher Deleted Successfully!',
    };
  }
}
