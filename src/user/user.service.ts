import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/createUser.dto';
import { UpdateUserDto } from './dto/updateUser.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entity/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private usersReposity: Repository<User>,
  ) {}

  get(): Promise<User[]> {
    return this.usersReposity.find();
  }
  post(createUserDto: CreateUserDto) {
    return this.usersReposity.save(createUserDto);
  }
  patch(updateUserDto: UpdateUserDto, userId: number) {
    return this.usersReposity.update(userId, updateUserDto);
  }
  delete(userId: number) {
    return this.usersReposity.delete(userId);
  }
  getUser(id: number) {
    return this.usersReposity.findOne({ where: { id } });
  }
  getUserByEmail(email: string) {
    return this.usersReposity.findOne({ where: { email } });
  }
}
