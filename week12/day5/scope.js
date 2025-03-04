var a=10; //global variable - attached to the global scope
// console.log(a);

// let b=20; //local variable - attached to the local scope
// console.log(b);


var number=10;
function test(){
    console.log(number);
}

test();


let num2=20;
function test2(){
    console.log(num2);
}

test2();


function test3(){
    let x=10;
}

test3();
// console.log(x); //error


var b; //define a global variable
function test4(){
    b=430; 
}

test4();
console.log(b); 


const z=10; //constant variable

console.log(z);
// z=20; //error


var t=50;

function test5(){
    let t=100;
}

test5();
console.log(t); 
