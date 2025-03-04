//fort in range loop
for (let i=5; i<=10;i++){
    console.log(`${i} : Hello `);
}


//while loop
total=0;
while (total < 100){
    total+=10;
    console.log(total);
}


//do while loop
i=10;
do{
    console.log('Hello');
    i++;
}while(i<5);



//for of loop
let names=['Tom','Jerry','Spike','Tyke','Tuffy'];

var i=0;
for (name of names){
    console.log(`${i} : ${name}`);
    i++;
}

console.log('------')
//for in loop

for (i in names){
    console.log(`${i} : ${names[i]}`);
}

console.log('------')

//break
keyword='Spike'
i=0;
for (name of names){
    console.log(name);
    if (name==keyword){
        console.log('Found at position', i);
        break;
    }
    i++;
}

//continue
console.log('------')
let skip_term='Tom';
for (name of names){
    
    if (name==skip_term){
        continue;
    }else{
        console.log(name);
    }
    i++;
}
