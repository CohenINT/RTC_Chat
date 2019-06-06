/// <reference path="../js/socket.io.js" />

//Make connection 
var port=4000;
var host="http://www.moshe-cohen.biz:";
var socket= io.connect(host+port);
let user_ip;
    $.getJSON('http://ip-api.com/json?callback=?', function(data) {
        user_ip=  data.query;
      });

//Query DOM
const urlParams = new URLSearchParams(window.location.search);
const myParam = urlParams.get('user');

 var messsage = document.getElementById("message");
//handle = document.getElementById("handle"), 
// btn = document.getElementById("send"),
container = document.getElementById("output"),
current_user=myParam,
contact_user="",
//output = document.getElementById("output"),
feedback = document.getElementById("feedback");

//Emit Events


document.getElementsByTagName("html")[0].addEventListener("keypress",function(e){

    if(e.keyCode!=13)
    {
        return;
    }
    
//moshe outcoming messages
let today= new Date();
let time = today.getHours()+":"+today.getMinutes();

let new_message = '<div class="message outgoing"> <p class="msg_time_outgoing">  '+time+'  </p> <p class="msg_text_outgoing">'+ message.value+"</p></div>";
container.innerHTML +=new_message;
    //sending the socket with data
    socket.emit("chat",{
        user:current_user,
        message:messsage.value,
        user_IP:user_ip
      
    });



    message.value = "";
});

messsage.addEventListener("keypress",function(){
    socket.emit("typing",user_ip)
});

//Listen for events

socket.on("chat",function(data){
//printing sent message on the conversation window
if(current_user ==data.user)
{//no need to redisplay the current user message
    return;
}
document.getElementById("contact_header").innerText=data.user;

//berta incoming messages
let today= new Date();
let minuts = today.getMinutes();
if(minuts<10)
{
    minuts="0"+minuts;
}
let time = today.getHours()+":"+minuts;
let new_message =  '<div class="message recived"> <p class="msg_time_incoming">  '+time+'  </p> <p class="msg_text_incoming">'+ data.message+"</p></div>";

//moshe outcoming messages
//let new_message = '<div class="message outgoing"> <p class="msg_time_outgoing">   21:38   </p> <p class="msg_text_outgoing">'+ data.message+"</p></div>";

container.innerHTML +=new_message;
});





socket.on("typing",function(data){


});