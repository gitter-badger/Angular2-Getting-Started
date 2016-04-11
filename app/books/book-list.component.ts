import {Component} from 'angular2/core';
import {Book} from './book';
import {BookService} from './book.service';

@Component({
    selector: 'my-booklist',
    templateUrl: 'app/books/book-list.component.html',
    providers: [BookService]
})
export class BookListComponent { 
    pageTitle: string  = 'Here\'s the book list that I promised.';
    
    //  The model that is going to be used to hold the filter from the HTML
    bookFilter: string = '';   
    filteredBooks: Book[] = [];  

    //  Inject the dependency of the BookService into the component to make available
    constructor(private _bookService: BookService) { }
    books: Book[] = this._bookService.GetAll();
    
    //  By default set the filtered books to be the book list and create a function to reset at any time
    ResetFilter = () :void => {
        this.filteredBooks = this.books;
    };
    
    ngOnInit() {
        this.ResetFilter();
    }

    //  Function created to scoop up any matches against the books in the library, this will normally be done in 
    //  a service, and resetting the array and the string searching is pretty poop, but i've not worked out how
    //  to wire up a service yet.
    FilterBooks = (searchTerm: string, event: KeyboardEvent) :void =>  {        
        if (!searchTerm.length){
            this.ResetFilter();
        }    
        else if (searchTerm.length >= 3) {  
            this.filteredBooks = this._bookService.SearchBooks(searchTerm);
        }
    };
}




