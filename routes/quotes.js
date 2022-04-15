const router = require('express').Router();
const express = require('express');
const quotesCtrl = require('../controllers/quotes');

// router.get('/books/new', quotesCtrl.new);
router.post('/books/:id/quotes', quotesCtrl.create);
router.get('/books/:id/quotes/new', quotesCtrl.new);
router.post('/', quotesCtrl.show);



module.exports = router; 
