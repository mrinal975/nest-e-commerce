import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { SubCategoryService } from './sub-category.service';
import { createSubCategoryDto } from './dto/create-sub-category.dto';
import { SubCategory } from './entity/sub-category.entity';
import { currentUser } from 'src/common/decorators/current-user.decorator';
import { User } from 'src/users/entity/user.entity';

@Controller('sub-category')
export class SubCategoryController {
  constructor(private readonly subCategoryService: SubCategoryService) {}

  @Get()
  getAll(): Promise<SubCategory[]> {
    return this.subCategoryService.getAll();
  }
  @Post()
  create(
    @Body() createSubCategoryDto: createSubCategoryDto,
    @currentUser() user: User,
  ) {
    return this.subCategoryService.create(createSubCategoryDto, user);
  }
  @Get(':id')
  getOne(@Param('id', ParseIntPipe) id: number): Promise<SubCategory> {
    return this.subCategoryService.getOne(id);
  }

  @Put(':id')
  update(
    @Param(':id', ParseIntPipe) id: number,
    @Body() updateSubCategoryDto: createSubCategoryDto,
  ): Promise<SubCategory> {
    return this.subCategoryService.update(id, updateSubCategoryDto);
  }
  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.subCategoryService.delete(id);
  }
}
