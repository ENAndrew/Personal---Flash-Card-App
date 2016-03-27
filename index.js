//Dependencies 

var express = require('express');
var bodyParser = require('body-Parser');
var cors = require('cors');
var mongoose = require('mongoose');

var FlashCard = require('./models/flashCard');

//Initiate

var app = express();
var uri = 'mongodb://localhost/27017';
mongoose.connect(uri);

app.use(bodyParser.json());
app.use(cors());

//Endpoints

app.post('/add-new', function(req, res){
    
    var newCard = new FlashCard();
    
    newCard.word = req.body.word;
    
    newCard.save(function(err, result){
        if(err){
            return res.status(500).send(err);
        } else {
            return res.status(200).send(result);
        }
    }); 
    
});







app.listen(8000, function(){
    console.log('Listening on port 8000');
});


