//function definition
function sayHello(){
    console.log("Hi there!");
    console.log('How are you?');
}


sayHello(); //function call
console.log('Pausong program')
sayHello();


for (let i=5; i<=10;i++){
    sayHello();
}


function average(num1,num2){
    total=num1+num2;
    avg=total/2;
    console.log('Average:',avg);
}

average(10,20);

average(40,50);

average(100,200);


function average2(num1,num2){
    total=num1+num2;
    avg=total/2;
    return avg;
}

result=average2(10,20);
console.log('Result:',result);