// function test(){
//     console.log('test');
// }

// test();

(()=>{
    console.log('test');
})();

(function (){
    console.log('test');
})();


function calculator(){
    function add(a,b){
        return a+b;
    }

    function sub(a,b){
        return a-b;
    }
    result=add(1,2);
}

calculator();



//closure
function calculate(){
    function add(a,b){
        return a+b
    }
    return add;
}

let adder = calculate();

console.log(adder(1,2));


//currying
let details = name => address => dob => {
    console.log(name,address,dob);
}

details('eric')('st pierre')('12/12/12');


mydetails=(name,address,dob) => details(name)(address)(dob); //uncurrying

mydetails('eric','st pierre','12/12/12');