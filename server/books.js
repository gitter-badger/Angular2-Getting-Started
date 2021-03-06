module.exports = function(app){
    
    var books = [
        {
            "BookId": 1,
            "BookName": "The Blade Itself",
            "ISBN": "ISBN-99921-58-10-7",
            "ReleaseDate": "March 19, 2016",
            "Price": 10.95,
            "StarRating": 5.0
        },
        {
            "BookId": 2,
            "BookName": "Harry Potter and the Deathly Hallows",
            "ISBN": "isbn-99921-58-10-7",
            "ReleaseDate": "March 18, 2016",
            "Price": 3.99,
            "StarRating": 4.2
        },
        {
            "BookId": 3,
            "BookName": "The Damned United",
            "ISBN": "isbn-99921-58-10-7",
            "ReleaseDate": "May 21, 2016",
            "Price": 9.99,
            "StarRating": 4.8
        },
        {
            "BookId": 4,
            "BookName": "A Feast For Crows",
            "ISBN": "Isbn-99921-58-10-7",
            "ReleaseDate": "May 15, 2016",
            "Price": 11.99,
            "StarRating": 4.5
        }
    ];
    
    app.get('/', function(req, res){
		res.send(books);
    });
    
    app.get('/search/:searchTerm', function(req, res){
        var _returnedBooks = [];
        books.forEach(b => {                              
            if(b.BookName.toLowerCase().indexOf(req.params.searchTerm) > -1) {
                _returnedBooks.push(b);
            }               
        });     
		res.send(_returnedBooks);
    });
}