import { Body, Controller, Get, Param, Patch, Req, Request, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';
import { Cron } from '@nestjs/schedule';
import { UpdateUserDto } from './dto/updateUser.dto';
import { RoleGuard } from 'src/auth/guards/role.guard';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  @UseGuards(JwtAuthGuard)
  async getUserProfile(@Request() req) {
    return await this.userService.findByEmail(req.user.username);
  }

  @Get('all')
  @UseGuards(JwtAuthGuard)
  async getUsers() {
    return await this.userService.findAll();
  }

  @Patch()
  @UseGuards(JwtAuthGuard)
  async upateUser(@Body() dto: UpdateUserDto, @Req() req) {
    return await this.userService.updateUser(dto, req.user.username);
  }
}
