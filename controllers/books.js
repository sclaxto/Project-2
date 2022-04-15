const Book = require('../models/book');
const Quote = require('../models/quote');
const User = require('../models/user');

module.exports = {
    index,
    new: newBook,
     show,
     allBooks,
     create,
     delete: deleteBook,
     update,
     edit
    
};

function index(req, res) {
    Book.find({}, function (err, books) {
        console.log(books, '<-- rbook')
        res.render('books/index', {
        books,
        title: "Book Shelf",
        });
    });
}

// create and show quotes
function show(req, res){
    Book.findById(req.params.id).populate('excerpt').exec( function(err, book){
        console.log(book)
    res.render('books/show',{ 
        book,
        title: book.title
    });
    });
    
}

function newBook(req, res){
    const newBook = new Book();
     res.render('books/new', {title: 'New Book'});
    
    


}

function allBooks(req, res) {
    let bookQuery = req.query.name ? {name: new RegExp(req.query.name, 'i')} : {};
    Book.find(bookQuery, function(err, books){
        res.render('/books/index', {
            books, 
            user: req.user,  
        })
    })
}

async function create(req, res){
    req.body.userId = req.user._id;
    const book = await new Book(req.body); 
    book.save(function(err){
        console.log(err)
        if(err) return res.redirect(`/books/new`);
        res.redirect(`/books/${book._id}`);
    })
}

function deleteBook(req, res) {
Book.findByIdAndDelete(req.params.id, (err)=>{
    res.redirect('/books')
})
}

function edit(req, res){
    Book.findOne({_id: req.params.id}, function(err, book){
        if(err || !book) return res.redirect('/books');
        res.render('books/edit', {book});
    });
}

 
function update(req, res) {
Book.findByIdAndUpdate(req.params.id,{title: req.body.title, author: req.body.author, genre: req.body.genre}, function(){
    res.redirect('/books')
});
}