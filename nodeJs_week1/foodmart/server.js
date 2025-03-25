//import my libaries
var express = require('express');
var ejs = require('ejs');


//import routers
productRouter=require('./routes/product');

//create server
var server=express(); 

//set view engine
server.set('view engine','ejs');
//bind template directory
server.set('views','./templates');


//middlewares
//set static folder
server.use(express.static('./static'));



//basic route handling


//connect routers
server.use('/',productRouter);


// server.get('/', async function(req,res){
//     res.send('Youre on the homepage');
// });

// server.get('/about', async function(req,res){
//     res.send('Youre on the about page');
// });


//start server and listen to port
PORT=3000;
server.listen(PORT,function(){
    console.log('Server is running on port',PORT);
});


//http://localhost:3000/