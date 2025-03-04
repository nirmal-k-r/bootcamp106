let car={
    //object properties
    regNo: "TN 01 AF 1234",
    make: "Toyota",
    model: "Prius",
    year: 2010,
    color: "Silver",
    fuelType: "Petrol",
    lastTrips: [10,20,30,40,50], //in kms
    remainingFuel: 20, //in litres

    //object methods
    drive: function(distance){
        this.remainingFuel=this.remainingFuel-(distance/10);//assuming car uses 1 litre of fuel for every 10 km
        console.log("Driving the car");
        console.log("Remaining fuel is",this.remainingFuel);
    },
    stop: function(){
        console.log("Stopping the car");
    },
    park: function(){
        console.log("Parking the car");
    },
    refuel: function(fuel){
        this.remainingFuel=this.remainingFuel+fuel;
        console.log("Refueling the car");
        console.log("Remaining fuel is",this.remainingFuel);
    },
    info: function(){
        console.log("Car details:");
        console.log("Reg No:",this.regNo);
        console.log("Make:",this.make);
        console.log("Model:",this.model);
        console.log("Year:",this.year);
        console.log("Color:",this.color);
        console.log("Fuel Type:",this.fuelType);
        console.log("Remaining fuel:",this.remainingFuel);
    }
}


//main program
// console.log(car);

console.log(car.regNo);
console.log(car.make);  

car.drive(50);
car.stop();
car.park();

car.color="Red";
console.log(car.color);

car.refuel(10);
car.info();