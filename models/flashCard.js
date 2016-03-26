
var mongoose = require('mongoose');

var cardSchema = new mongoose.Schema({
    word: { type: String, lowercase: true }
});

module.exports = mongoose.model('flashCards', cardSchema);


