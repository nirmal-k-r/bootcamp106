class Animal{
    constructor(name){
        this.name = name;
    }
    eat(){
        console.log(`${this.name} is eating`);
    }

    info(){
        console.log(this.name);
    }
}


class Dog extends Animal{
    constructor(name, breed){
        super(name);
        this.breed = breed;
    }
    bark(){
        console.log(`${this.name} is barking`);
    }
    info(){
        console.log(`${this.name} is a ${this.breed}`); 
    }
}

tobby=new Dog('Tobby', 'German Shepherd');
// tobby.eat();
// tobby.info();
// tobby.bark();
tobby.info();