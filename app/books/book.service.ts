import {Injectable} from 'angular2/core';
import {Book} from './book';
import {Http, HTTP_PROVIDERS} from 'angular2/http';

@Injectable()
export class BookService {
    
    Books: Book[] = [];  

    //  Inject the dependency of the BookService into the component to make available,
    //  I would put this into it's own method - but this is a 'startup' i guess for now
    constructor(private http : Http) { };
    
    //  By default set the filtered books to be the book list and create a function to reset at any time
    GetAll() {
        return this.http.get('http://localhost:3001/');
    };    
    
    Search(searchTerm: string) {
        return this.http.get('http://localhost:3001/search/' + searchTerm);
    };    
    
}






