import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-product-department',
    templateUrl: './product-department.component.html',
    styleUrls: ['./product-department.component.css'],
    inputs:['department']
})

export class ProductDepartmentComponent implements OnInit {
    constructor(){}
    ngOnInit() { }
}