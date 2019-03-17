var express = require("express");
var socket = require("socket.io");
var colors= require("colors");
//App setup

var app = express();
var server = app.listen(4000,function(){

console.log("listening to requests on port 4000".yellow);

});

//Static files

app.use(express.static("public"));


//Socket setup
var io= socket(server);
io.on("connection",(socket)=>{
    console.log("made socket connection.".yellow,socket.id);
});



