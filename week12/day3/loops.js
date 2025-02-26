// console.log('Hello');
// console.log('Hello');
// console.log('Hello');
// console.log('Hello');
// console.log('Hello');
// console.log('Hello');
// console.log('Hello');
// console.log('Hello');
// console.log('Hello');
// console.log('Hello');

//loops
//-for loop
//-while loop
//-do while loop

//for loop
for (var i=0;i<5;i++){
    console.log("Hello world");
}

//for loop
for (var i=0;i<5;i++){
    console.log(i);
}

console.log("Hello world");
//decrement

for (var i=5;i>=0;i--){
    console.log(i);
}

console.log("-----")

//print even numbers between 1 and 10
for (var i=0;i<=10;i+=2){
    console.log(i);
}

//odd numbers
for (var i=1;i<=10;i+=2){
    console.log(i);
}


//while
var i=0;

while (i<5){
    console.log('hello');
    i++;
}

console.log("-----")


i=5;
do{
    console.log('hello');
    i++;
}while(i<5);

console.log("-----")

//for of loop

let names=['Tom','Jerry','Spike','Tyke','Tuffy'];


for (let name of names){
    console.log(name);  
}