//dictionary in js
person={
    name: "Raj",
    age: 22,
    married:false,
    children: ["Tom","Jerry"],
}


console.log(person);


//access name
console.log(person.name);
console.log(person.age);

console.log(person.children[0]); //first child


console.log(person['married']); //access using key


//overwriting

person.name="Rajesh";

console.log(person);


//display key value pairs
for (key in person){
    console.log(key,person[key]);
}

for (key in person){
    console.log(key);
}

for (value of Object.values(person)){
    console.log(value);
}   


console.log(person);

//delete key value pair
delete person.married;

console.log(person);

person.FavorieColor="Blue";
console.log(person);