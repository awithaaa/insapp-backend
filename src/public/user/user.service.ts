import { ConflictException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/user-create.dto';
import * as argon from 'argon2';
import { hash } from 'bcryptjs';

@Injectable()
export class UserService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(dto: CreateUserDto) {
    const user = await this.prismaService.user.findUnique({
      where: {
        email: dto.email,
      },
    });
    if (user) {
      throw new ConflictException('Creadentials already taken.');
    }

    dto.password = await hash(dto.password, 10);
    const newUser = await this.prismaService.user.create({
      data: { ...dto },
    });

    const { password, ...res } = newUser;
    return res;
  }

  async findAll() {
    const users = await this.prismaService.user.findMany({});
    return users;
  }

  async findByEmail(email: string) {
    const user = await this.prismaService.user.findUnique({
      where: {
        email: email,
      },
    });

    return user;
  }

  async findById(id: number) {
    return this.prismaService.user.findUnique({
      where: {
        id: id,
      },
    });
  }
}
