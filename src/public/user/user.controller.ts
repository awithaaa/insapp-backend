import { Controller, Get, Param, Request, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';
import { Cron } from '@nestjs/schedule';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  @UseGuards(JwtAuthGuard)
  async getUserProfile(@Request() req) {
    return await this.userService.findByEmail(req.user.username);
  }

  @Get('ss')
  @UseGuards(JwtAuthGuard)
  async getUsers() {
    return await this.userService.findAll();
  }
}
