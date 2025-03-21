function newCar(regNo,make,model, age=0){
    console.log(regNo,make,model,age);
}

newCar('1234','Mazda','Miata')

newCar('1234','Mazda','Miata',10)

weather='sunny';

// if (weather=="sunny"){
//     console.log("Great weather");
// }else{
//     console.log("Bad weather");
// }

weather=="sunny" ? console.log("Great weather") :  console.log("Ba  d weather");


name='Tom'
age=10

console.log(`${name} is ${age} years old`);


names=["Tom","Eric","Pierre","Paul"];

names.forEach((name)=>{
    console.log(name);
});

//search algorithm
result=names.some((name)=>{
    return name=="Eric";
});

console.log(result);


//check whether all numbers inside array are positive

numbers=[1,2,3,4,5,6];

result=numbers.every((number)=>{
    return (number>0);
});

if (result==true){
    console.log('All positive numbers');
}else{
    console.log('contains negative number or zero')
}


sentence='Tom is in danger';

if (sentence.includes('Tom')){
    console.log(true);
}else{
    console.log(false);
}

fruits=['apple','pineapple','apple juice','banana','grape'];

keyword='na';
results=[];
fruits.forEach((fruit)=>{
    if (fruit.includes(keyword)){
        results.push(fruit);
    }
});
console.log(results);



sentence='Tom is in danger';

sentence=sentence.replace('Tom','Eric');
console.log(sentence);


data='   test  ';

data=data.trim();

console.log(data);