import {Component} from 'angular2/core';
import {ProductListComponent} from 'app/products/product-list.component';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html', 
    directives: [ProductListComponent]
})
export class AppComponent { 
    pageTitle: string = 'My Shop!';
}
