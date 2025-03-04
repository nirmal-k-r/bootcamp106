//function definition
function sum(num1,num2){  //num1 and num2 are parameters
    let total=num1+num2;
    return total;
}

a=5
b=10

added_values=sum(a,b); //function call  //a and b are arguments
console.log(added_values);

console.log(sum(10,20)); //function call

let x = function (){ //anonymous function
    console.log("Hello World");
}

x();

x=4;

console.log(x);


//arrow function - asynchronous programming

let y = () => {
    console.log("Hello World");
}

y();

//default values
function calculateTax(yearlySalary, dependents=0, taxRate=0.15){
    var tax=0;
    if (dependents==0){
        tax=yearlySalary*taxRate;
    }else{
        tax=yearlySalary*taxRate-(dependents*50000);
    }

    if (tax<0){
        tax=0;
    }
    console.log(tax);
}

// calculateTax(240000,0); //0 is being pssed every time as the second argument
// calculateTax(350000,0);
// calculateTax(500000,0);
// calculateTax(600000,1);
// calculateTax(750000,0);

calculateTax(800000);
calculateTax(900000,2,0.1);
calculateTax(1000000,3);
calculateTax(1100000);


function test(){
    return "done";
    console.log("Hello World"); //this line will not be executed as a return statement exists the function
}

console.log(test());

