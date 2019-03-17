var net = require("net");
var server = net.createServer();
var colors = require("colors");


server.on("connection",function(vaa){
var remote_address = vaa.remoteAddress+":"+vaa.remotePort;
console.log("new client connection is made.".green);


 vaa.on("data",function(d){
console.log("%s said: %s".cyan,remote_address,d);
vaa.write("is this what you said? : "+d);
if(d=="close")
{
server.close(function(){
console.log("server was closed by user.");

})
}
 });



 vaa.once("close",function(){
console.log("connection from %s closed".yellow,remote_address);

 });


vaa.on("error",function(err){
console.log("connection %s error: %s ",remote_address,err.message);


});


});


server.listen(9000,function(){


    console.log("server listening to %j",server.address());

});




