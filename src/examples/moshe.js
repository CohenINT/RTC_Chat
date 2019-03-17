const express = require("express");
var app = express();
var port=process.env.port || 3000;

//handling cors issues
app.use((req, res, next) => {
    res.append('Access-Control-Allow-Origin', ['*']);
    res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.append('Access-Control-Allow-Headers', 'Content-Type');
    next();
});
//routing
app.get("/:param1",function(req,res){//param1 and param2 are the name for the paramter which can be used to access the request data on server side
   console.log(req.params.param1); 
  
   res.status(202).json({ip:req.ip,hostname:req.hostname,things:req.params["param1"]});

});



app.listen(port,function(){
    console.log("listening to localhost:"+port);
});