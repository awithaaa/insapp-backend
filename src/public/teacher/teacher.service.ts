import { Injectable } from '@nestjs/common';
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
  }
}
