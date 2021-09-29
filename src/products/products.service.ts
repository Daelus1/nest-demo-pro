import { Injectable } from '@nestjs/common';
import { Product } from './interfaces/product.interface';

@Injectable()
export class ProductsService {
  products: Product[] = [];
  //DB Logic
  create(product: Product) {
    this.products.push(product);
    return this.products;
  }
  findAll(): Product[] {
    return this.products;
  }
  findOne(id: string): Product {
    return this.products.find((i) => i.id === id);
  }
  delete(id: string): Product[] {
    const index = this.products.findIndex((p) => p.id === id);
    this.products.splice(index, 1);
    return this.products;
  }
}
