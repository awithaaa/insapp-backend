import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateClassDto } from './dto/createClass.dto';
import { UpdateClassDto } from './dto/updateClass.dto';
import { StudentService } from '../student/student.service';
import { UpdateStuClsDto } from './dto/updateStudentClass.dto';

@Injectable()
export class ClassService {
  constructor(private readonly prismaService: PrismaService) {}

  async createClass(dto: CreateClassDto) {
    const cls = await this.prismaService.class.create({
      data: {
        ...dto,
      },
    });

    return {
      message: 'Class Registered Successfully.',
      class: cls,
    };
  }

  async findClassById(id: number) {
    const cls = await this.prismaService.class.findUnique({
      where: { id: id },
    });

    if (!cls) throw new NotFoundException('Class Not Found.');

    return cls;
  }

  async findAllClasses() {
    const cls = await this.prismaService.class.findMany({});

    return cls;
  }

  async editClassById(id: number, dto: UpdateClassDto) {
    const cls = await this.prismaService.class.findUnique({
      where: { id: id },
    });

    if (!cls) throw new NotFoundException('Class Not Found.');

    const updateCls = await this.prismaService.class.update({
      where: { id: cls.id },
      data: { ...dto },
    });

    return {
      message: 'Class Updated Succesfully.',
      class: updateCls,
    };
  }

  async deleteClassById(id: number) {
    const cls = await this.prismaService.class.findUnique({
      where: { id: id },
    });

    if (!cls) throw new NotFoundException('Class Not Found.');

    const deleteCls = await this.prismaService.class.delete({
      where: { id: id },
    });

    return {
      message: 'Class Deleted Successfully',
    };
  }

  // Add students into classes

  async addStudentClass(sid: number, cid: number, userId: number) {
    const student = await this.prismaService.student.findUnique({
      where: {
        id: sid,
      },
    });
    if (!student) throw new NotFoundException('Student Not Found.');

    const cls = await this.prismaService.class.findUnique({
      where: { id: cid },
    });
    if (!cls) throw new NotFoundException('Class Not Found.');

    const stuCls = await this.prismaService.studentClass.create({
      data: {
        classId: cid,
        studentId: sid,
        added: userId,
      },
    });

    return {
      message: 'Student added Successfully.',
    };
  }

  async findStudentClassById(id: number) {
    const result = await this.prismaService.studentClass.findUnique({
      where: { id: id },
    });
    if (!result) throw new NotFoundException('Result Not Found.');

    return result;
  }

  async findStudentClassBySid(id: number) {
    const result = await this.prismaService.studentClass.findMany({
      where: { studentId: id },
    });
    if (!result) throw new NotFoundException('Result Not Found.');

    return result;
  }

  async editStudentClassById(id: number, dto: UpdateStuClsDto) {
    const cls = await this.prismaService.studentClass.findUnique({
      where: { id: id },
    });
    if (!cls) throw new NotFoundException('Result Not Found.');

    const updateCls = await this.prismaService.studentClass.update({
      where: {
        id: cls.id,
      },
      data: { ...dto },
    });

    return {
      message: 'Class Updated Successfully.',
      class: updateCls,
    };
  }

  async deleteStudentClassById(id: number) {
    const result = await this.prismaService.studentClass.findUnique({
      where: { id: id },
    });
    if (!result) throw new NotFoundException('Class Not Found');

    const deleteCls = await this.prismaService.studentClass.delete({
      where: { id: id },
    });
    return {
      message: 'Class Deleted Successfully.',
    };
  }
}
