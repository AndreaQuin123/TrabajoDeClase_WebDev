import { Body, Controller, Post, Get, Param, Put } from '@nestjs/common';
import { ProductsService } from './products.service';
import { get } from 'http';

@Controller('products') //decorador que define la ruta del controlador
export class ProductsController {

    constructor(private readonly productService:ProductsService){}

    @Post()
    addProduct(@Body() completeBody: { title: string; description: string; price: number }): any {
        const generatedProduct = this.productService.insertProduct(completeBody.title, completeBody.description, completeBody.price);
        return {id: generatedProduct.id};
    }

    @Get()
    getAllProducts(){
        return this.productService.getProducts();
    }

    @Get(':id')
    getProductsById(@Param('id') prodId: string): any {
        return this.productService.getSingleProduct(prodId);
    }
}



//controllador : se crea para manejar las rutas
//model: se crea para manejar la estructura de los datos
//service: se crea para manejar lo que hace el sistema, el controllador llama al service
//module: para importar los controladores y servicios