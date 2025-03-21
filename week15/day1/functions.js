//variables are passed by value
function run(value){
    value=10;
}


var number=5;

run(number);

console.log(number);




function process(data){
    data[0]=100
    data[1]=99
    data[2]=98
}

numbers=[1,2,3];

process(numbers);

console.log(numbers);


//copying by value
a=5
b=a
b=10

console.log(a);


//copying by reference
a=[10];
b=a;
b[0]=99;

console.log(a);
