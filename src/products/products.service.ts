import { Injectable } from '@nestjs/common';
import { ProductRepository } from './product.repository';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductsService {
  constructor(private productRepo: ProductRepository) {}
  getAllProducts() {
    return this.productRepo.findAll();
  }
  createProduct(createProductDto: CreateProductDto) {
    return this.productRepo.createProduct(createProductDto);
  }

  getProductById(id: number) {
    return this.productRepo.findOne(id);
  }
  updateProduct(id: number, updateProductDto: UpdateProductDto) {
    return this.productRepo.updateProduct(id, updateProductDto);
  }
  deleteProduct(id: number) {
    return this.productRepo.deleteProduct(id);
  }
}
