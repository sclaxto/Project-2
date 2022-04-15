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
router.get('/:id/edit', booksCtrl.edit);
router.put('/:id', booksCtrl.update);

module.exports = router;
