import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Product } from './entity/product.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ProductRepository {
  constructor(
    @InjectRepository(Product)
    private readonly productRepo: Repository<Product>,
  ) {}
  async createProduct(product: Partial<Product>): Promise<Product> {
    return await this.productRepo.save(product);
  }

  async findAll(): Promise<Product[]> {
    return await this.productRepo.find();
  }

  async findOne(id: number): Promise<Product> {
    return await this.productRepo.findOneBy({ id });
  }

  async updateProduct(id: number, product: Partial<Product>): Promise<Product> {
    await this.productRepo.update(id, product);
    return this.findOne(id);
  }

  async deleteProduct(id: number): Promise<void> {
    await this.productRepo.delete(id);
  }
}
