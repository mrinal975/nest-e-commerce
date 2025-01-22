import { Repository } from 'typeorm';
import { SubCategory } from './entity/sub-category.entity';

export class SubCategoryRepository {
  constructor(private readonly subCategoryRepo: Repository<SubCategory>) {}
  async findAll(): Promise<SubCategory[]> {
    return await this.subCategoryRepo.find();
  }

  async getOne(id: number): Promise<SubCategory> {
    return await this.subCategoryRepo.findOneBy({ id });
  }

  async create(subCategory: Partial<SubCategory>): Promise<SubCategory> {
    return await this.subCategoryRepo.save(subCategory);
  }

  async update(
    id: number,
    subCategory: Partial<SubCategory>,
  ): Promise<SubCategory> {
    await this.subCategoryRepo.update(id, subCategory);
    return this.getOne(id);
  }

  async delete(id: number): Promise<void> {
    await this.subCategoryRepo.delete(id);
  }
}
