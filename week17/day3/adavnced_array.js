result=[10,13,19,18,17];

// a=result[0];
// b=result[1];
// c=result[2];
// d=result[3];
// e=result[4];


let [a,b,c,d,e] = result;  //destructuring the array

console.log(a,b,c,d,e);


//spread operator
person={
    username:'john',
    password:'1234',
    email:'john1234@1234.com',
    gender: 'Male',
    age: 25
}

let {
    password,
    ...user
} = person;

console.log(user);


//rest operator
names=['Paul', 'John', 'George', 'Ringo'];
let [n1,n2, ...new_names]=names;

console.log(new_names);
console.log(n1,n2);


//cloning an array

data=[1,2,3,4,5];

newData=data; //not a clone, just a reference
newData[0]=100;

console.log(data);


//create a clone
data=[1,2,3,4,5];
newData=[...data]; //spread operator
newData[0]=99;

console.log(data);


