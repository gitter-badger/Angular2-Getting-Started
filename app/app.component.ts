import {Component} from 'angular2/core';
import {BookListComponent} from 'app/books/book-list.component.js';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html', 
    directives: [BookListComponent]
})
export class AppComponent { 
    pageTitle: string = 'My Books Application.';
}
