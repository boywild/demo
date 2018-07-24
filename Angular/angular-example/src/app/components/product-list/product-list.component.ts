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
    selected(item) {
        this.currentProduct=item;
        console.warn(this.currentProduct);
        this.onProductSelected.emit(item);
    }
}