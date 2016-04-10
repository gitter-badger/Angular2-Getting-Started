import {Component} from 'angular2/core';

@Component({
    selector: 'my-productlist',
    templateUrl: 'app/products/product-list.component.html'
})
export class ProductListComponent { 
    title: string  = 'Product list!';
}
