var nett  = require("net");
var colors= require("colors");
var rl = require("readline");
var prompt= rl.createInterface(process.stdin,process.stdout);
var HOST = "127.0.0.1";
var PORT = 9000;

var client = new nett.Socket();
client.connect(PORT,HOST,function(){
console.log("Connected to "+HOST+":"+PORT);

var msg="Hello!!! iam moshe!";

prompt.question("Say: ",function(talk){
    console.log("talk is "+talk);

msg = talk;

//Writing to server
client.write(HOST+":"+PORT+" $: "+msg.yellow);

});

});





client.on("data",function(data){
console.log("data: "+data);



});


client.on("close",function(){
 console.log("connection closed".yellow);

});