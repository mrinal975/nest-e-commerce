import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { CategoryService } from './category.service';
import { Category } from './entity/category.entity';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { currentUser } from 'src/common/decorators/current-user.decorator';
import { User } from 'src/users/entity/user.entity';
@Controller('categories')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Get()
  async getAll(): Promise<Category[]> {
    return await this.categoryService.getAll();
  }
  @Get(':id')
  async getOne(@Param('id', ParseIntPipe) id: number): Promise<Category> {
    return await this.categoryService.getOne(id);
  }
  @Post()
  async create(
    @Body() createCategoryDto: CreateCategoryDto,
    @currentUser() user: User,
  ) {
    return await this.categoryService.create(createCategoryDto, user);
  }
  @Put(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateCategoryDto: UpdateCategoryDto,
  ) {
    return await this.categoryService.update(id, updateCategoryDto);
  }
  async delete(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return await this.categoryService.delete(id);
  }
}
