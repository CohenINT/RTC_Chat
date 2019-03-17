var express = require("express");
var colors= require("colors");
//App setup

var app = express();
var server = app.listen(4000,function(){

console.log("listening to requests on port 4000".yellow);

});

//Static files

app.use(express.static("public"));
