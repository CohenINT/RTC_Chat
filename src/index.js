var express = require("express");
var socket = require("socket.io");
var colors= require("colors");
var cors = require('cors');
//App setup

var app = express();
app.use(cors());
var server = app.listen(4000,function(){

console.log("listening to requests on port 4000".yellow);

});


// app.use((req, res, next) => {
//   res.append('Access-Control-Allow-Origin', ['*']);
//   res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
//   res.append('Access-Control-Allow-Headers', 'Content-Type');
//   next();
// });
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



