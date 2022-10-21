import {
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Body,
  ParseIntPipe,
} from '@nestjs/common';

import { CreateUserDto } from './dto/createUser.dto';
import { UpdateUserDto } from './dto/updateUser.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}
  @Get()
  getUsers(): any {
    return this.userService.get();
  }
  @Post()
  user(@Body() createUserDto: CreateUserDto) {
    return this.userService.post(createUserDto);
  }

  @Get('/:userId')
  getUser(@Param('userId', ParseIntPipe) userId: number) {
    return this.userService.getUser(userId);
  }
  @Delete('/:userId')
  deleteUser(@Param('userId', ParseIntPipe) userId: number) {
    return this.userService.delete(userId);
  }
  @Patch('/:userId')
  updateUser(
    @Body() updateUserDto: UpdateUserDto,
    @Param('userId', ParseIntPipe) userId: number,
  ) {
    return this.userService.patch(updateUserDto, userId);
  }
}
