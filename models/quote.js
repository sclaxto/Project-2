const mongoose = require('mongoose');
const Schema = mongoose.Schema; 
// Create your User Model

const quoteSchema = new Schema({
    content: {type: String, required: true},
    page: Number, 
    user: {type: Schema.Types.ObjectId, ref: 'User'},
    userName: String,
    // userAvatar: String
  }, {
    timestamps: true
})

//complining schema into a model and exporting it 
module.exports = mongoose.model('Quote', quoteSchema); 