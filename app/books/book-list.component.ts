import {Component} from 'angular2/core';

@Component({
    selector: 'my-booklist',
    templateUrl: 'app/books/book-list.component.html'
})
export class BookListComponent { 
    pageTitle: string  = 'Here\'s the book list that I promised.';
    books: any[] = [
        {
            "BookId": 1,
            "BookName": "The Blade Itself",
            "ISBN": "GDN-0008",
            "ReleaseDate": "March 19, 2016",
            "Price": 19.95,
            "StarRating": 5.0
        },
        {
            "BookId": 2,
            "BookName": "Harry Potter and the Deathly Hallows",
            "ISBN": "GDN-0009",
            "ReleaseDate": "March 18, 2016",
            "Price": 32.99,
            "StarRating": 4.2
        },
        {
            "BookId": 3,
            "BookName": "The Damned United",
            "ISBN": "GDN-0010",
            "ReleaseDate": "May 21, 2016",
            "Price": 8.9,
            "StarRating": 4.8
        },
        {
            "BookId": 4,
            "BookName": "A Feast For Crows",
            "ISBN": "GDN-0011",
            "ReleaseDate": "May 15, 2016",
            "Price": 11.55,
            "StarRating": 4.5
        }
    ];
}
