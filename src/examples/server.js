const  http = require("http");
const fs= require("fs");
var colors = require('colors');

const server = http.createServer((req, res) => {
    var data = []
    req.on('data', chunk => {
      data.push(chunk);
      console.log("chunk is "+ " "+chunk);
      console.log("data is:" +data);
      var res_txt=req.socket.localAddress+": "+data.toString();
      res.write(res_txt);
      res.end();
    });
    req.on('end', () => {
      
    
    })
  }).listen(8080);

  server.on("tlsClientError",(err,socket) =>
{
    socket.end("HTTP bad bady request man.\n"+" client ip: "+socket.localAddress+"".red);
});

server.on("secureConnection",tls=>{

    console.log("succcesfull connection of client:  ."+tls.localAddress+"".red); 

});

// server.on("connection",mo=>{
//  console.log("connection esablished.".yellow);
//     mo.on("TCP connection established.".yellow);
// });