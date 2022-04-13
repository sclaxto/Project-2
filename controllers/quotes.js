const Book = require('../models/book');
const Quote = require('../models/quote');


module.exports = {
    new: newQuote,
    delete: deleteQuote
    
};

function newQuote(req, res){
    res.render("quotes/new", {title: "Add Quote"});
}

function deleteQuote (req, res, next) {
Book.findOne({'quotes._id': req.params.id}, function(err, bookWithQuote){
    const quote = bookWithQuote.quotes.id(req.params.id);
      if(!quote.user.equals(req.user._id)) return res.redirect(`/books/${bookWithQuote._id}`);

      quote.remove(
     
    bookWithQuote.save(function(err){
        if(err) next(err);
        res.redirect(`/books/${bookWithQuote._id}`)
          })
        );
    });
}


function create (req, res,) {
    Book.findById(req.params.id, function (err, bookAddedToDatabase){
        req.body.user = req.user._id;
        req.body.userName = req.user.name;
     bookAddedToDatabase.quotes.push(req.body);
      bookAddedToDatabase.save(function (err){
          res.redirect(`/books/${bookAddedToDatabase._id}`);

      });
    });
}
