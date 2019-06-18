var express = require("express");
var http = require('http');
var app = express();
var route = express.Router();
var  server = require('http').createServer(app);
var socket_t = require("socket.io");
var colors= require("colors");
var users=new Array();
const path = require("path");
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


route.get("/home", function (req, res, next)
{
 console.log(req.query.user);
//TODO: push the username into the users objects (this would be used by the main window to watch all connected users)
    let temp_usr = { user: req.query.user, pass: "" };
    console.log(users.indexOf(temp_usr));

if(users.indexOf(temp_usr)===-1)
{//not exist
  users.push(temp_usr);
    console.log(users);
 
}

else{
  console.log("user picked an exist username.");
    res.end("please pick other username"); 
    
  return;
    }

    let temp_url_redirect = req.headers.referer + "home.html?user=" + temp_usr.user;
    res.redirect(temp_url_redirect);
    next();

 });


 app.use("/",route);

//Static files

app.use(express.static("public"));
//Socket setup
var io= socket_t(server);
io.origins('*:*');
io.on("connection",(socket)=>{
    console.log("made socket connection.".yellow);


    //getting data from socket from client side
   socket.on("chat",function(data){

   console.log("getting data from socket client = "+data.user_IP+" ".yellow);
   console.log("message: "+data.message);
   console.log("----------------------------------------------------");
    //all sockets sending data from server side
     io.sockets.emit("chat",data);
   });



   socket.on("typing",function(data){
    //    console.log(data+" is  typing now".green);
    //  socket.broadcast.emit("typing",data);
   
   
   
    });

});



