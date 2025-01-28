import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Request,
} from '@nestjs/common';
import { SubCategoryService } from './sub-category.service';
import { createSubCategoryDto } from './dto/create-sub-category.dto';
import { SubCategory } from './entity/sub-category.entity';

@Controller('sub-category')
export class SubCategoryController {
  constructor(private readonly subCategoryService: SubCategoryService) {}

  @Get()
  getAll(): Promise<SubCategory[]> {
    return this.subCategoryService.getAll();
  }
  @Post()
  create(@Body() createSubCategoryDto: createSubCategoryDto, @Request() req) {
    const user = req.user; // Extract the authenticated user

    return this.subCategoryService.create(createSubCategoryDto, user);
  }
  @Get(':id')
  getOne(@Param('id') id: number): Promise<SubCategory> {
    return this.subCategoryService.getOne(id);
  }

  @Put(':id')
  update(
    @Param(':id') id: number,
    @Body() updateSubCategoryDto: createSubCategoryDto,
  ): Promise<SubCategory> {
    return this.subCategoryService.update(id, updateSubCategoryDto);
  }
  @Delete(':id')
  delete(@Param('id') id: number): Promise<void> {
    return this.subCategoryService.delete(id);
  }
}
