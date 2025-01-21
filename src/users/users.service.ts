import { Injectable } from '@nestjs/common';
import { UsersRepository } from './users.repository';
import { User } from './entity/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(private readonly userRepository: UsersRepository) {}
  getAllUser(): Promise<User[]> {
    return this.userRepository.findAll();
  }
  getUserById(id: number): Promise<User> {
    return this.userRepository.findOne(id);
  }
  createUser(createUserDto: CreateUserDto): Promise<User> {
    const user = new User();
    user.name = createUserDto.name;
    user.email = createUserDto.email;
    user.password = createUserDto.password;
    return this.userRepository.create(user);
  }
  updateUpdate(id: number, updateUserDto: UpdateUserDto): Promise<User> {
    return this.userRepository.update(id, updateUserDto);
  }
  deleteUser(id: number): Promise<void> {
    return this.userRepository.delete(id);
  }
}
