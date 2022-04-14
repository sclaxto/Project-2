const book = require('../models/book');
const Book = require('../models/book');
const Quote = require('../models/quote');


module.exports = {
    new: newQuote,
    create,
    addToBook,
    update
};

function newQuote(req, res){
    Quote.find({}, function(err, quotes){
        res.render('quotes/new', {
            title: 'Add Quote',
            quotes
        });
    });
}

function create(req, res) {
    req.body.book = req.params.id
    Quote.create(req.body, function(err, quotes){
            quote.save(function(err){
                res.redirect('/quotes');
            });
            
        });

    }


    function addToBook(req, res){
        Book.findById(req.params.id, function(err, bookDocument){
            bookDocument.quote.push(req.body);
            bookDocument.save(function(err){
                res.redirect(`/books/${bookDocument._id}`);
            });
        });
    }

// function create (req, res,) {
//     Book.findById(req.params.id, function (err, bookAddedToDatabase){
//         req.body.user = req.user._id;
//         req.body.userName = req.user.name;
//      bookAddedToDatabase.quotes.push(req.body);
//       bookAddedToDatabase.save(function (err){
//           res.redirect(`/books/${bookAddedToDatabase._id}`);

//       });
//     });
// }
 
function update(req, res) {
    Book.findOne({'quotes._id': req.params.id}, function(err, book) {
    const  commentSubdoc = book.comments.id(req.params.id);
    if (!commentSubdoc.userId.equals(req.user._id)) return res.redirect(`/books/${book._id}`);
    commentSubdoc.text = req.body.text;
    book.save(function(err){
        res.redirect(`/books/${book._id}`);
    });
});
}