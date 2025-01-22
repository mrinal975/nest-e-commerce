import { Injectable, NotFoundException } from '@nestjs/common';
import { SubCategory } from './entity/sub-category.entity';
import { SubCategoryRepository } from './sub-category.repository';
import { CategoryRepository } from 'src/category/category.repository';
import { createSubCategoryDto } from './dto/create-sub-category.dto';
import { UpdateSubCategoryDto } from './dto/update-sub-category.dto';
import { User } from 'src/users/entity/user.entity';
@Injectable()
export class SubCategoryService {
  constructor(private readonly subCategoryRepo: SubCategoryRepository,
    private readonly categoryRepository: CategoryRepository,
  ) {}

  async getAll(): Promise<SubCategory[]> {
    return await this.subCategoryRepo.findAll();
  }

  async getOne(id: number): Promise<SubCategory> {
    return await this.subCategoryRepo.getOne(id);
  }

  async create(
    createSubCategoryDto: createSubCategoryDto,
    user: User,
  ): Promise<SubCategory> {
    const { name, description, category_id } = createSubCategoryDto;
    const category = await this.categoryRepository.getOne(category_id);
    if (!category) {
      throw new NotFoundException(`Category with ID ${category_id} not found`);
    }

    const subCategory = new SubCategory();
    subCategory.name = name;
    subCategory.description = description;
    subCategory.category = category;
    subCategory.created_by = user;

    return await this.subCategoryRepo.create(subCategory);
  }

  async update(
    id: number,
    updateSubCategoryDto: UpdateSubCategoryDto,
  ): Promise<SubCategory> {
    return await this.subCategoryRepo.update(id, updateSubCategoryDto);
  }

  async delete(id: number): Promise<void> {
    this.subCategoryRepo.delete(id);
  }
}
