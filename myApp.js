var express = require('express');
var app = express();

//Add mongodb@~3.6.0 and mongoose@~5.4.0 to the project’s package.json. require mongoose as mongoose in myApp.js.
var mongoose = require('mongoose');

//after setting up a hosted database on MongoDB Atlas, connect to the database
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });





































 module.exports = app;
