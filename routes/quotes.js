const router = require('express').Router();
const express = require('express');
const quotesCtrl = require('../controllers/quotes');

router.get('/books/new', quotesCtrl.new);
router.post('/quotes', quotesCtrl.create);
router.delete('/books/quotes/:id', quotesCtrl.delete);


module.exports = router; 
