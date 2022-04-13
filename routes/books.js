const router = require('express').Router();
const express = require('express');
const booksCtrl = require('../controllers/books');
const isLoggedIn = require('../config/auth');

router.get('/', booksCtrl.show);
router.get('/new', isLoggedIn, booksCtrl.new);
router.get('/:id', booksCtrl.show);

// function isLoggedIn(req, res, next) {
//     if (req.isAuthenticated()) return next();
//     res.redirect("/auth/google");
//   }
module.exports = router;
