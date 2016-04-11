import {Component} from 'angular2/core';
import {Book} from './books/book';
import {BookListComponent} from './books/book-list.component';


@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html', 
    directives: [BookListComponent]
})
export class AppComponent { 
    pageTitle: string = 'My Books Application.';
}
