const book = require('../models/book');
const Book = require('../models/book');
const Quote = require('../models/quote');


module.exports = {
    new: newQuote,
    create,
    show
};

function newQuote(req, res){
        res.render('quotes/new', {
            title: 'Add Quote',
            bookId: req.params.id // passing key variable pairs
  });
}
//when you submit//
function create(req, res) {
    Book.findById(req.params.id, function(err, bookDocument){
        Quote.create(req.body, function(err, quote){
            console.log(err)
            bookDocument.excerpt.push(quote._id);
        bookDocument.save(function(err){
            res.redirect(`/books/${bookDocument._id}`);
            });
        });
    });
 }


    function show(req, res){ 
    Quote.findById(req.params.id)
    .populate('excerpt')
    .exec(function(err, quote){
        console.log(quote, "<---this is the quote")
    });
}

