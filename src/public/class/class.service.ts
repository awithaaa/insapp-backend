import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateClassDto } from './dto/createClass.dto';
import { UpdateClassDto } from './dto/updateClass.dto';

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
}
