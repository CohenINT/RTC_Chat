/// <reference path="../js/socket.io.js" />

//Make connection 
var port=4000;
var host="http://localhost:";
var socket= io.connect(host+port);
let user_ip;
    $.getJSON('http://ip-api.com/json?callback=?', function(data) {
        user_ip=  data.query;
      });

//Query DOM

 var messsage = document.getElementById("message");
//handle = document.getElementById("handle"), 
// btn = document.getElementById("send"),
container = document.getElementById("output"),
//output = document.getElementById("output"),
feedback = document.getElementById("feedback");

//Emit Events


document.getElementsByTagName("html")[0].addEventListener("keypress",function(e){

    if(e.keyCode!=13)
    {
        return;
    }
    
    //sending the socket with data
    socket.emit("chat",{
     
        message:messsage.value,
        // handle:user_ip
    });



    message.value = "";
});

messsage.addEventListener("keypress",function(){
    socket.emit("typing",user_ip)
});

//Listen for events

socket.on("chat",function(data){
//printing sent message on the conversation window


//berta incoming messages
//let new_message =  '<div class="message recived"> <p class="msg_time">   21:38   </p> <p class="msg_text">'+ data.message+"</p></div>";

//moshe outcoming messages
let new_message = '<div class="message outgoing"> <p class="msg_time_outgoing">   21:38   </p> <p class="msg_text_outgoing">'+ data.message+"</p></div>";

container.innerHTML +=new_message;
});





socket.on("typing",function(data){


});