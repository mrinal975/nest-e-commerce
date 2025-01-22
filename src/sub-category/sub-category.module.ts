import { Module } from '@nestjs/common';
import { SubCategoryController } from './sub-category.controller';
import { SubCategoryService } from './sub-category.service';
import { SubCategoryRepository } from './sub-category.repository';

@Module({
  controllers: [SubCategoryController],
  providers: [SubCategoryService, SubCategoryRepository],
})
export class SubCategoryModule {}
