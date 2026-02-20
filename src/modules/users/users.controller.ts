import { Controller, Get } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get()
  async findAll() {
    await this.userService.findAll();
  }

  @Get(':id')
  async findOne(id: number) {
    await this.userService.findOne(id);
  }
}
