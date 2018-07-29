import { Component, OnInit } from '@angular/core';
import { Product } from '../../model/product.model';

@Component({
    selector: 'app-product-row',
    templateUrl: './product-row.component.html',
    styleUrls: ['./product-row.component.css'],
    inputs: ['product'],
    host: { 'class': 'item' }
})

export class ProductRowComponent implements OnInit {
    constructor(){}
    ngOnInit() { }
}