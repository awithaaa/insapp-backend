import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateTeacherDto } from './dto/createTeacher.dto';
import { TeacherEditDto } from './dto/editTeacher.dto';
import { AddTeacherPaymentDto } from './dto/addTeacherPayment.dto';
import { EditTeacherPaymentDto } from './dto/editTeacherPayment.dto';

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

  // Teacher Payment
  async addTeacherPayment(dto: AddTeacherPaymentDto) {
    const teacher = this.prismaService.teacher.findUnique({
      where: { id: dto.teacherID },
    });
    if (!teacher) throw new NotFoundException('Teacher Not Found.');

    const cls = await this.prismaService.class.findUnique({
      where: { id: dto.classID },
    });
    if (!cls) throw new NotFoundException('Class Not Found.');

    const updateCls = await this.prismaService.class.update({
      where: { id: dto.classID },
      data: { totalAmount: cls.totalAmount - dto.amount },
    });

    const payment = await this.prismaService.teacherPayment.create({
      data: { ...dto },
    });

    return {
      message: 'Payment Added Successfully.',
      payment: payment,
    };
  }

  async findTeacherPaymentById(id: number) {
    const payment = await this.prismaService.teacherPayment.findUnique({
      where: { id: id },
    });
    if (!payment) throw new NotFoundException('Payment Not Found.');

    return payment;
  }

  async findAllTeacherPaymentById(id: number) {
    const payments = await this.prismaService.teacherPayment.findMany({
      where: { teacherID: id },
    });
    if (!payments) throw new NotFoundException('Payment Not Found.');

    return payments;
  }

  async editTeacherPaymentById(id: number, dto: EditTeacherPaymentDto) {
    const payment = await this.prismaService.teacherPayment.findUnique({
      where: { id: id },
    });
    if (!payment) throw new NotFoundException('Payment Not Found.');

    const updatePayment = await this.prismaService.teacherPayment.update({
      where: { id: id },
      data: { ...dto },
    });

    return {
      message: 'Payment Updated Successfully.',
      payment: updatePayment,
    };
  }

  async deleteTeacherPaymentById(id: number) {
    const payment = await this.prismaService.teacherPayment.findUnique({
      where: { id: id },
    });
    if (!payment) throw new NotFoundException('Payment Not Found.');

    const deletePayment = await this.prismaService.teacherPayment.delete({
      where: { id: id },
    });

    return {
      message: 'Payment Deleted Successfully.',
    };
  }
}
