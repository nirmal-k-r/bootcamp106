//import my libaries
var express = require('express');
var ejs = require('ejs');
var bodyParser = require('body-parser');

//import routers
productRouter=require('./routes/product');
adminRouter=require('./routes/admin');

//connect database
db=require('./db');

//create server
var server=express(); 
server.use(bodyParser.urlencoded({extended:true}));
server.use(bodyParser.json());

//set view engine
server.set('view engine','ejs');
//bind template directory
server.set('views','./templates');


//middlewares
//set static folder
server.use(express.static('./static'));


//connect routers
server.use('/',productRouter);
server.use('/admin',adminRouter);


//start server and listen to port
PORT=3000;
server.listen(PORT,function(){
    console.log('Server is running on port',PORT);
});


//http://localhost:3000/