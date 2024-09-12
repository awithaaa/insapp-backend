import { Injectable, NotFoundException } from '@nestjs/common';
import { StudentRegisterDto } from './dto/student-register.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { StudentEditDto } from './dto/student-edit.dto';
import { AddStudentPaymentDto } from './dto/addStudentPayment.dto';
import { EditStudentPaymentDto } from './dto/editStudentPayment.dto';

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

  // Student Payment
  async addStudentPayment(dto: AddStudentPaymentDto) {
    const student = this.prismaService.student.findUnique({
      where: { id: dto.studentID },
    });
    if (!student) throw new NotFoundException('Student Not Found.');

    const cls = await this.prismaService.class.findUnique({
      where: { id: dto.classId },
    });
    if (!cls) throw new NotFoundException('Class Not Found.');

    const updateCls = await this.prismaService.class.update({
      where: { id: dto.classId },
      data: { totalAmount: cls.totalAmount + dto.amount },
    });

    const payment = await this.prismaService.studentPayment.create({
      data: { ...dto },
    });

    return {
      message: 'Payment Added Successfully.',
      payment: payment,
    };
  }

  async findStudentPaymentById(id: number) {
    const payment = await this.prismaService.studentPayment.findUnique({
      where: { id: id },
    });
    if (!payment) throw new NotFoundException('Payment Not Found.');

    return payment;
  }

  async findAllStudentPaymentById(id: number) {
    const payments = await this.prismaService.studentPayment.findMany({
      where: { studentID: id },
    });
    if (!payments) throw new NotFoundException('Payment Not Found.');

    return payments;
  }

  async editStudentPaymentById(id: number, dto: EditStudentPaymentDto) {
    const payment = await this.prismaService.studentPayment.findUnique({
      where: { id: id },
    });
    if (!payment) throw new NotFoundException('Payment Not Found.');

    const updatePayment = await this.prismaService.studentPayment.update({
      where: { id: id },
      data: { ...dto },
    });

    return {
      message: 'Payment Updated Successfully.',
      payment: updatePayment,
    };
  }

  async deleteStudentPaymentById(id: number) {
    const payment = await this.prismaService.studentPayment.findUnique({
      where: { id: id },
    });
    if (!payment) throw new NotFoundException('Payment Not Found.');

    const deletePayment = await this.prismaService.studentPayment.delete({
      where: { id: id },
    });

    return {
      message: 'Payment Deleted Successfully.',
    };
  }
}
