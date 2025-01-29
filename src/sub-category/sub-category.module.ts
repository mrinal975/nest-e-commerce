import { MiddlewareConsumer, Module } from '@nestjs/common';
import { SubCategoryController } from './sub-category.controller';
import { SubCategoryService } from './sub-category.service';
import { SubCategoryRepository } from './sub-category.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SubCategory } from './entity/sub-category.entity';
import { JwtModule } from '@nestjs/jwt';
import { CategoryModule } from 'src/category/category.module';
import { AuthMiddleware } from 'src/common/middleware/auth.middleware';

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
export class SubCategoryModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware).forRoutes('sub-category');
  }
}
