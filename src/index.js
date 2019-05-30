var express = require("express");
var http = require('http');
var app = express();
var  server = require('http').createServer(app);
var socket_t = require("socket.io");
var colors= require("colors");


//App setup
//


var port=4000;
server.listen(port,function(){
    
    console.log("listening to requests on port "+port);
});




 app.use(function(req, res, next) {
   res.header("Access-Control-Allow-Origin", "*");
   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
   next();
 });
//Static files

app.use(express.static("public"));


//Socket setup
var io= socket_t(server);
io.origins('*:*');
io.on("connection",(socket)=>{
    console.log("made socket connection.".yellow);


    //getting data from socket from client side
   socket.on("chat",function(data){

   console.log("getting data from socket client".yellow);
    //all sockets sending data from server side
     io.sockets.emit("chat",data);
   });



   socket.on("typing",function(data){
    //    console.log(data+" is  typing now".green);
    //  socket.broadcast.emit("typing",data);
   
   
   
    });

});



