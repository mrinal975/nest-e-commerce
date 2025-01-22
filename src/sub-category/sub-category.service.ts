import { Injectable } from '@nestjs/common';
import { SubCategory } from './entity/sub-category.entity';
import { SubCategoryRepository } from './sub-category.repository';
import { createSubCategoryDto } from './dto/create-sub-category.dto';
import { UpdateSubCategoryDto } from './dto/update-sub-category.dto';
@Injectable()
export class SubCategoryService {
  constructor(private readonly subCategoryRepo: SubCategoryRepository) {}

  async getAll(): Promise<SubCategory[]> {
    return await this.subCategoryRepo.findAll();
  }

  async getOne(id: number): Promise<SubCategory> {
    return await this.subCategoryRepo.getOne(id);
  }

  async create(
    createSubCategoryDto: createSubCategoryDto,
  ): Promise<SubCategory> {
    return await this.subCategoryRepo.create(createSubCategoryDto);
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
