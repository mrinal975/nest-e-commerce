import { Injectable } from '@nestjs/common';
import { CategoryRepository } from './category.repository';
import { Category } from './entity/category.entity';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { SlugifyPipe } from 'src/common/pipes/slugify.pipe';
@Injectable()
export class CategoryService {
  constructor(private categoryRepository: CategoryRepository) {}

  async getAll(): Promise<Category[]> {
    return await this.categoryRepository.getAll();
  }

  async create(
    createCategoryDto: CreateCategoryDto,
    user: any,
  ): Promise<Category> {
    const { name, description } = createCategoryDto;
    const slug = new SlugifyPipe().transform(name);
    return await this.categoryRepository.create({
      name,
      description,
      slug,
      created_by: user.id,
    });
  }

  async getOne(id: number): Promise<Category> {
    return await this.categoryRepository.getOne(id);
  }

  async update(
    id: number,
    updateCategoryDto: UpdateCategoryDto,
  ): Promise<Category> {
    return await this.categoryRepository.update(id, updateCategoryDto);
  }
  async delete(id: number): Promise<void> {
    await this.categoryRepository.delete(id);
  }
}
