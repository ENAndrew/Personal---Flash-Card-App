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


