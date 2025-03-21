user={
    name:'John',
    age:25,
    address: '1234, 5th avenue, us',
    gender: 'male',
    
    login: function (){
        console.log('logging in');
    },
    register: function(){
        console.log('registering');
    }
}

//keys
for (key of Object.keys(user)){
    console.log(key);
}


//values
for (value of Object.values(user)){
    console.log(value);
}


//entries
for (entry of Object.entries(user)){
    console.log(entry);
}


for ([key,value] of Object.entries(user)){
    console.log(key,value);
}

//use spread to copy and add new properties
newUser={...user, email:'tomtom@tom.com'}
console.log(newUser);