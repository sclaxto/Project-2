const mongoose = require('mongoose');
const Schema = mongoose.Schema; 
// Create your User Model

const bookSchema = new Schema({
    author: {type: String
    },
    genre: {
        type: String,
        required: true
    }, 
    title: {
        type: String, 
        required: true
    },
    userId: {type: Schema.Types.ObjectId, ref:"User"},
    excerpt: [{type: Schema.Types.ObjectId, ref:"Quote"}]
  
});


//complining schema into a model and exporting it 
module.exports = mongoose.model('Book', bookSchema);