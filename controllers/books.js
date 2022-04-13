const Book = require('../models/book');
const Quote = require('../models/quote');
const User = require('../models/user');

module.exports = {
    index,
    new: newBook,
    //  show
    
}

function index(req, res) {
    // console.log(req.user, '<-- req.user')
    Book.find({}, function (err, books))
        res.render('books/index', {
        books, 
        title: "Book Shelf",
        });
    };


// function show(req, res){
//     Book.findById(req.params.id, function(err, book){

//     })
    
// }

function newBook(req, res){
    const newBook = new Book();
     res.render('books/new', {title: 'New Book'})
    }
    

const book = new Book (req.body);
book.save(function (err){
    if(err) return res.redirect("/books/new");
    console.log(book);
    res.redirect(`/books/${book._id}`);
})