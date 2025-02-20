//operators
//operators are used to perform operations on variables and values
//operators are used in calculations

var num1=10;
var num2=5;

var sum = num1 + num2;
console.log(sum);

var diff = num1 - num2;
console.log(diff);

var product = num1 * num2;
console.log(product);

var quotient = num1 / num2;
console.log(quotient);

var remainder = num1 % num2;
console.log(remainder);

remainder= 10 % 3;
console.log(remainder);

//order of operations
//BODMAS

var result = 4 + (8/2-1) * 3;

console.log(result);


//increment and decrement operators
//increment operator
var count=0;
count=count+1;

console.log(count);

count=0;
count++; //count=count+1
console.log(count);

count=0;
++count; //count=count+1
console.log(count);


count=0;
var x=count++;

count=0;
var y=++count;

console.log(x);
console.log(y);

//decrement operator
count=0;
count=count-1;

console.log(count);

count=0;
count--; //count=count-1
console.log(count);
