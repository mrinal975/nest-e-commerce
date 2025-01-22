import { Repository } from 'typeorm';
import { Category } from './entity/category.entity';
import { InjectRepository } from '@nestjs/typeorm';

export class CategoryRepository {
  constructor(
    @InjectRepository(Category) private readonly catRepository: Repository<any>,
  ) {}
  async getAll(): Promise<Category[]> {
    return await this.catRepository.find();
  }
  async create(category: Partial<Category>): Promise<Category> {
    return await this.catRepository.save(category);
  }
  async getOne(id: number): Promise<Category> {
    return await this.catRepository.findOneBy({ id });
  }
  async update(id: number, category: Partial<Category>): Promise<Category> {
    await this.catRepository.update(id, category);
    return this.getOne(id);
  }
  async delete(id: number): Promise<void> {
    await this.catRepository.delete(id);
  }
}
