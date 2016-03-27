
var mongoose = require('mongoose');

var cardSchema = new mongoose.Schema({
    word: { type: String, lowercase: true },
    difficulty: { type: String, default: 'all', enum: ['difficult', 'easy', 'all'] }
});

module.exports = mongoose.model('flashCards', cardSchema);


