import { Injectable, NotFoundException } from '@nestjs/common';
import { StudentRegisterDto } from './dto/student-register.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { StudentEditDto } from './dto/student-edit.dto';

@Injectable()
export class StudentService {
  constructor(private readonly prismaService: PrismaService) {}

  async studentRegister(dto: StudentRegisterDto) {
    const student = await this.prismaService.student.create({
      data: {
        ...dto,
      },
    });

    return {
      message: 'User Registered Successfully!',
      student: student,
    };
  }

  async findAllStudent() {
    const students = await this.prismaService.student.findMany({
      select: {
        id: true,
        firstName: true,
        lastName: true,
        gender: true,
        grade: true,
      },
    });

    return {
      students,
    };
  }

  async findStudentById(id: number) {
    const student = await this.prismaService.student.findUnique({
      where: {
        id: id,
      },
    });
    if (!student) throw new NotFoundException('Student Not Found!');

    return student;
  }

  async editStudentById(id: number, dto: StudentEditDto) {
    const student = await this.prismaService.student.findUnique({
      where: {
        id: id,
      },
    });
    if (!student) throw new NotFoundException('Student not found!');

    const updateStudent = await this.prismaService.student.update({
      where: {
        id: id,
      },
      data: { ...dto },
    });
    return {
      message: 'Student Updated Successfully!',
      student: {
        updateStudent,
      },
    };
  }

  async deleteStudentById(id: number) {
    const student = await this.prismaService.student.findUnique({
      where: {
        id: id,
      },
    });
    if (!student) throw new NotFoundException('Student not found!');

    const deleteStudent = await this.prismaService.student.delete({
      where: {
        id: id,
      },
    });

    return {
      message: 'Student Deleted Successfully!',
    };
  }
}
