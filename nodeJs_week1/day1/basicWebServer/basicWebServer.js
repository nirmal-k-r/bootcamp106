//import libraries
http = require('http'); 

//create server
server=http.createServer(async function(req,res){
    res.end('Hello world');
});


PORT=3000;
server.listen(PORT,function(){
    console.log('Server is running on port',PORT);
});

//http://localhost:3000/