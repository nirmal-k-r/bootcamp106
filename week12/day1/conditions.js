var temp=26;

if (temp>26){
    console.log("It is hot. Turning on the AC");
}else{
    console.log("It is not hot. Turning off the AC");
}


var married=true;
if (married==true){
    console.log("You are married");
}


var age=17;

if (age>=18){
    console.log("You are an adult");
}else{
    console.log("You are a minor");
}


var total=1000;

if (total>10000){
    console.log("You get a 10% discount");
}else if (total>5000){
    console.log("You get a 5% discount");
}else if (total>1000){
    console.log("You get a 2% discount");
}else{
    console.log("You get no discount");
}


//&& operator - and operator -  all conditions must be satsified
// || operator - or operator - at least one condition needs to be satified


temp=28;
var humidity=40;

if (temp > 26 && humidity>60){
    console.log('turn on  the ac');
}else{
    console.log('turn off the ac');
}

temp=26;
humidity=40;

if (temp >=26 || humidity>60){
    console.log('turn on  the ac');
}else{
    console.log('turn off the ac');
}


paid=false;


if (paid != true){
    console.log('you have not paid');
}


if (!paid){
    console.log('you have not paid');
}


value=10;

switch(value){
    case 1:
        console.log('one');
        break;
    case 2:
        console.log('two');
        break;
    case 3:
        console.log('three');
        break;

    default:
        console.log('invalid number');
        break;
    
        
};