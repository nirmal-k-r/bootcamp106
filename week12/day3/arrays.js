var name1='Tom';
var name2='Jerry';
var name3='Spike';
var name4='Tyke';
var name5='Tuffy';

//arrays
let names=['Tom','Jerry','Spike','Tyke','Tuffy'];
console.log(names);

//accessing elements in an array

console.log(names[0]); //displaying the first element at index 0

value=names[2];
console.log(value);

console.log(names[4]);


let marks=[55,87,56,89,45,67];

console.log(marks[3]);

//length of an array
console.log(marks.length);


//overwrting arrays

breeds=['Bulldog','Poodle','Pug','Beagle','Labrador'];
console.log(breeds);

breeds[2]='Rotweiller';
console.log(breeds);

breeds[4]='Golden Retriever';
console.log(breeds);

//adding elements to an array

names=[];
console.log(names);

names.push('Tom');
console.log(names);
names.push('Jerry');
names.push('Spike');
names.push('Tyke');
names.push('Tuffy');
console.log(names);

//removing elements from an array
names.pop() //remove last element from the array
console.log(names);

names.pop();
console.log(names);

// names.pop('Jerry'); //cannot delete specfic element
// console.log(names);


student=['Tom','Doe',20,false];
console.log(student);


//slicing an array

let fruits=['apple','banana','mango','orange','grapes','kiwi'];
console.log(fruits);

let firstThree=fruits.slice(0,3);
console.log(firstThree);

let data=fruits.slice(3,5);
console.log(data);

//convert array to string
console.log(fruits);
console.log(fruits.toString());


p1=['Tom','Jerry','Spike','Tyke','Tuffy'];
p2=['Albert','Einstein','Newton','Galileo','Tesla'];

let p3=p1.concat(p2);
console.log(p3);

