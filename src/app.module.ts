import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './public/user/user.module';
import { AuthModule } from './auth/auth.module';
import { StudentModule } from './public/student/student.module';
import { ScheduleModule } from '@nestjs/schedule';
import { TeacherModule } from './public/teacher/teacher.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    PrismaModule,
    UserModule,
    AuthModule,
    StudentModule,
    TeacherModule,
  ],
})
export class AppModule {}
