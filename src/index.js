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
    console.log("made socket connection.".yellow);


    //getting data from socket from client side
   socket.on("chat",function(data){


    //all sockets sending data from server side
     io.sockets.emit("chat",data);
   });



   socket.on("typing",function(data){
       
     socket.broadcast.emit("typing",data);
   
   
   
    });

});



