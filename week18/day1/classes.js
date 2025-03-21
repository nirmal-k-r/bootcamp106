//define class
class User{
    constructor(name, age, address, gender){
        this.name=name;
        this.age=age;
        this.address=address;
        this.gender=gender;
    }

    login(){
        console.log('logging in');
    }

    register(){
        console.log('registering');
    }

    details(){
        console.log(this.name, this.age, this.address, this.gender);
    }

    get salary(){
        return this.internal_salary;
    }

    set salary(salary){
        this.internal_salary=salary;
    }

}

//create object
tom=new User('Tom', 25, '1234, 5th avenue, us','male');
// console.log(tom);
tom.login(); //calling function login with tom object
tom.details()

eric=new User('Eric', 30, '1234, 5th avenue','male');
// console.log(eric);
eric.details()


eric.age=90;
eric.details()

eric.salary=1000;
console.log(eric.salary);
