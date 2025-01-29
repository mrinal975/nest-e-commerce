import { MiddlewareConsumer, Module } from '@nestjs/common';
import { CategoryController } from './category.controller';
import { CategoryService } from './category.service';
import { CategoryRepository } from './category.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Category } from './entity/category.entity';
import { JwtModule } from '@nestjs/jwt';
import { AuthMiddleware } from 'src/auth/auth.middleware';
@Module({
  imports: [
    TypeOrmModule.forFeature([Category]),
    JwtModule.register({
      secret: 'nest-e-commerce',
      signOptions: { expiresIn: '1d' },
    }),
  ],
  controllers: [CategoryController],
  providers: [CategoryService, CategoryRepository],
  exports: [CategoryRepository],
})
export class CategoryModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware).forRoutes('categories'); // Apply only to the 'categories' route
  }
}
