const mongoose = require('mongoose');
const Schema = mongoose.Schema; 
// Create your User Model
const userSchema = new mongoose.Schema({
    name: String,
    googleId: {
        type: String, 
        required: true
    },
    email: String, 
    avatar: String
},{
timestamps: true
});

//complining schema into a model and exporting it 
module.exports = mongoose.model('User', userSchema); 