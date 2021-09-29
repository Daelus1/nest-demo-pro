import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateProductDTO } from './dto/create-product.dto';
import { Product } from './interfaces/product.interface';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private productService: ProductsService) {}

  @Post()
  async create(@Body() product: CreateProductDTO): Promise<Product[]> {
    return this.productService.create(product);
  }

  @Get(':id')
  async findOne(@Param() params): Promise<Product> {
    return this.productService.findOne(params.id);
  }

  @Get()
  async find(): Promise<Product[]> {
    return this.productService.findAll();
  }

  @Put()
  update(): string {
    return 'Update Endpoint';
  }

  @Delete(':id')
  async delete(@Param() params): Promise<Product[]> {
    return this.productService.delete(params.id);
  }
}
