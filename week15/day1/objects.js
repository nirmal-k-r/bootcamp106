// person={
//     name: 'Tom',
//     age: '10',
//     sex: 'male'
// }

//another way of defining an object

person=new Object();
person.name='Tom';
person.age=10;
person.sex='male';

console.log(person);

console.log(person.name);
person.name='eric';
console.log(person.name);



car={
    'regNo':'1234',
    'make': 'toyota',
    'model': 'prius'
}
console.log(car);

console.log(car.make);
console.log(car['make']);

property='make';

console.log(car[property]);



// function createUser(name,age,address){
//     return{
//         name: name,
//         age: age,
//         address: address
//     }
// }

function createUser(name,age,address){
    return{
        name,
        age,
        address
    }
}

tom=createUser('tom',10,'1235 boulevaert street');
console.log(tom);

for (property in tom){
    console.log(property,tom[property])
}

