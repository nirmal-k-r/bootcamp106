var express = require('express');
var bodyParser = require('body-parser');
var ejs = require("ejs");
var path = require("path");
const request = require('request');
var session = require('express-session');


//create express app
var app = express();

//set up the view engine
app.set("views", path.join(__dirname, "templates"));
app.set('view engine', 'ejs');

//setup session
app.use(session({
  secret: 'ygud8(£ghduwed8093yeghiHDFY7384C',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false, sameSite: 'lax'}
}));

//set up the body parser
app.use(bodyParser.urlencoded({extended: true}));

//set up the static files
app.use(express.static('public'));

//set up the routes
//home page
app.get('/', function(req, res){
  console.log(req.session.user);
  if (req.session.user){
    products = [];

    //send http request to retreive the products
    // const myRequest = new Request("https://di-dimart.onrender.com/api/product/");
    const myRequest = new Request("http://localhost:4000/api/product/");

    fetch(myRequest)
      .then((response) => response.json())
      .then((response) => {
        var ctx = {
          title: "Dimart",
          products: response,
          user: req.session.user
        };
        res.render('home.ejs',ctx);
      });
    }else{
    res.redirect('/login');
  }
});

//login page
app.get('/login', function(req, res){
  var ctx = {
    title: "Dimart"
  };
  res.render('login.ejs',ctx);
});

//post
app.post('/login', function(req, res){
  var username = req.body.username;
  var password = req.body.password;

  // console.log(username,password);

  //send post request to login route api
  // const myRequest = new Request("https://di-dimart.onrender.com/api/login/", {
  const myRequest = new Request("http://localhost:4000/api/authentication/login", {
    method: 'POST',
    body: JSON.stringify({username: username, password: password}),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  fetch(myRequest)
    .then((response) => response.json())
    .then((response) => {
      // console.log(response);
      if (response.message=="Login successful"){
        req.session.user = response.user;
        console.log(req.session.user);
        res.redirect('/');
      }else{
        res.redirect('/login');
      }
      
    });

});

//logout
app.get('/logout', function(req, res){
  req.session.destroy();
  res.redirect('/login');
});

//start the server
app.listen(3000, function(){
  console.log('server is running on port 3000');
});