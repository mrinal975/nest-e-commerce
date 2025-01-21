import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entity/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersRepository {
  constructor(
    @InjectRepository(User) private readonly usersRepo: Repository<User>,
  ) {}

  async findAll() {
    return await this.usersRepo.find();
  }
  async findOne(id: number): Promise<User> {
    return await this.usersRepo.findOneBy({ id });
  }
  async create(user: User): Promise<User> {
    return await this.usersRepo.save(user);
  }
  async update(id: number, user: Partial<User>): Promise<User> {
    await this.usersRepo.update(id, user); // Only updates the provided fields
    return await this.findOne(id);
  }
  async delete(id: number): Promise<void> {
    await this.usersRepo.delete(id);
  }
}
