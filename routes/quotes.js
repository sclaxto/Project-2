const router = require('express').Router();
const express = require('express');
const quotesCtrl = require('../controllers/quotes');

// router.get('/books/new', quotesCtrl.new);
// router.post('/quotes', quotesCtrl.create);
router.get('/quotes/new', quotesCtrl.new);
router.post('/quotes', quotesCtrl.addToBook);
router.put('/quotes/:id', quotesCtrl.update);


module.exports = router; 
