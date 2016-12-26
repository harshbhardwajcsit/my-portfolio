var express=require('express');
 var bodyParser=require("body-parser");



 var app=express();

 app.use(bodyParser.json ());                         //parsing commands use for post data
 app.use(bodyParser.urlencoded({extended:true}));

// public middleware for front-end
 app.use(express.static("public"));



var port=process.env.PORT || 3000;
 app.listen(port,function (req,res) {
     console.log("server started");

 })