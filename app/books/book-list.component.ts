import {Component} from 'angular2/core';
import {Book} from './book';
import {BookService} from './book.service';
import {Http, HTTP_PROVIDERS, Response} from 'angular2/http';
import 'rxjs/Rx';

@Component({
    selector: 'my-booklist',
    templateUrl: 'app/books/book-list.component.html',
    providers: [BookService]
})
export class BookListComponent { 
    
    //  Setup the privates here
    pageTitle: string  = 'Here\'s the book list that I promised.'; 
    books: Book[] = [];  
    
    //  Inject the dependency of the BookService into the component to make available, i love how this mirrors
    //  dependency injection in c# almost exactly :)
    constructor(private _bookService: BookService, private http : Http) { };
    
    completeHook = (n) => {
        console.log(n);
    };
    
    //  By default set the filtered books to be the book list and create a function to reset at any time
    ResetFilter = () :void => {
        this._bookService.GetAll()
            .subscribe(
                data => {  this.books = data},
                err => console.error(err),
                () => this.completeHook(1)
            ); 
    };
    
    ngOnInit() {
        this.ResetFilter();
    }

    //  Function created to scoop up any matches against the books in the library, this will normally be done in 
    //  a service, and resetting the array and the string searching is pretty poop, but i've not worked out how
    //  to wire up a service yet.
    FilterBooks = (searchTerm: string, event: KeyboardEvent) :void =>  {  
        if (searchTerm.length > 3) {   
        this._bookService.Search(searchTerm)
            .subscribe(
                data => { this.books = data},
                err => console.error(err),
                () => this.completeHook(2)
            );
            //.subscribe(_books => this.books = _books); 
        }
        else if (!searchTerm) {
            this.ResetFilter();
        }
    };
}




