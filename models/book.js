const mongoose = require('mongoose');
const Schema = mongoose.Schema; 
// Create your User Model

const bookSchema = new Schema({
    author: {type: String, required: true, unique: true},
    title: String, 
    genre: Array
    
    
});


//complining schema into a model and exporting it 
module.exports = mongoose.model('Book', bookSchema);