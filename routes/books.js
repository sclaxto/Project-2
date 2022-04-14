const router = require('express').Router();
const express = require('express');
const booksCtrl = require('../controllers/books');
const isLoggedIn = require('../config/auth');

router.get('/', booksCtrl.index);
router.get('/books/all', booksCtrl.allBooks)
router.get('/new', isLoggedIn, booksCtrl.new);
router.get('/:id', booksCtrl.show);
router.post('/', booksCtrl.create);
router.delete('/:id', booksCtrl.delete);

// function isLoggedIn(req, res, next) {
//     if (req.isAuthenticated()) return next();
//     res.redirect("/auth/google");
//   }
module.exports = router;
