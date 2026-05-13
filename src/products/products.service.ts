import {Injectable, NotFoundException} from '@nestjs/common';
import { Product } from './products.model';

@Injectable()
export class ProductsService {
    products: Product[] = [];

    insertProduct(title: string, description: string, price: number): any {
        const newProduct = new Product(Math.random().toString(), title, description, price);
        this.products.push(newProduct);
        return newProduct;
    }

    getProducts() {
        return [...this.products]; //DECORADOR SPREAD, esto hace que mantiene la inmutabilidad del array original, osea manda una copia del array
    }

    getSingleProduct(productId: string) {
        const product = this.products.find((prod) => prod.id === productId);
        
        if(!product){
            throw new NotFoundException('Could not find product.');
        }

        return {...product}; 
    }

}