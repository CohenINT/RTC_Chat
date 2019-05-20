/// <reference path="../js/socket.io.js" />

//Make connection 
var port=4000;
var host="http://localhost:";
var socket= io.connect(host+port);


//Query DOM

 var messsage = document.getElementById("message");
handle = document.getElementById("handle"), 
btn = document.getElementById("send"),
output = document.getElementById("output"),
feedback = document.getElementById("feedback");

//Emit Events

btn.addEventListener("click",function(){


    //sending the socket with data
    socket.emit("chat",{
     
        message:messsage.value,
        handle:handle.value
    });

});

messsage.addEventListener("keypress",function(){
    socket.emit("typing",handle.value)
});

//Listen for events

socket.on("chat",function(data){

output.innerHTML +='<p><strong>'+data.handle+':</strong>'+data.message+'</p>';

});

socket.on("typing",function(data){
    var name="";
if(data ==""||data==null)
{
    name = socket.io.engine.hostname;
}
else{
    name = data;
}

feedback.innerHTML="<p><em>"+name+" is typing a message...</em></p>";


});