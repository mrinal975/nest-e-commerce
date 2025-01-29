import { Module } from '@nestjs/common';
import { SubCategoryController } from './sub-category.controller';
import { SubCategoryService } from './sub-category.service';
import { SubCategoryRepository } from './sub-category.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SubCategory } from './entity/sub-category.entity';
import { JwtModule } from '@nestjs/jwt';
import { CategoryModule } from 'src/category/category.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([SubCategory]),
    JwtModule.register({
      secret: 'nest-e-commerce',
      signOptions: { expiresIn: '1d' },
    }),
    CategoryModule,
  ],
  controllers: [SubCategoryController],
  providers: [SubCategoryService, SubCategoryRepository],
})
export class SubCategoryModule {}
