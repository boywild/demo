import { Component, OnInit, EventEmitter } from '@angular/core';
import { Product } from '../../model/product.model';

@Component({
    inputs: ['productsList'],
    outputs: ['onProductSelected'],
    selector: 'app-product-list',
    templateUrl: 'product-list.component.html',
    styleUrls: ['product-list.component.css']
})
export class ProductListComponent implements OnInit {
    productsList: Product[];
    onProductSelected: EventEmitter<Product>;
    private currentProduct: Product;
    constructor() {
        this.onProductSelected = new EventEmitter();
    }
    ngOnInit() { }

    selectedMyProduct(product: Product): void {
        this.currentProduct = product;
        this.onProductSelected.emit(product);
    }

    isSelected(product: Product): boolean {
        if (!product || !this.currentProduct) {
            return false;
        }
        return product.sku === this.currentProduct.sku;
    }
}