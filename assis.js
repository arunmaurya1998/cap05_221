function vehicle(brand, model, speed, fueltype) {
    this.brand = brand;
    this.model = model;
    this.speed = speed;
    this.fueltype = fueltype;
}

vehicle.prototype.accelerate = function() {
    console.log("increase the speed of the vehicle.");
}

vehicle.prototype.brake = function() {
    console.log(" decrease the speed");
}

vehicle.prototype.refuel = function() {
    console.log("the vehicle is refueling.");
}

function car(brand, model, speed, fueltype, numberOfWheels) {
    vehicle.call(this, brand, model, speed, fueltype);
    this.numberOfWheels = numberOfWheels;
}



Object.setPrototypeOf(car.prototype, vehicle.prototype)
car.prototype.honk = function() {
    console.log("honking sound.");
}

let NewCar = new car("Maruti", "Belone", 100, "Petrol", 4);

console.log(NewCar);


function Airplane (brand, model, speed, fueltype, numberOfEngines,hasLandingGear){

vehicle.call(this,brand, model, speed, fueltype, numberOfEngines,hasLandingGear )
this.numberOfEngines = numberOfEngines;
this.hasLandingGear = hasLandingGear;
}

Airplane.prototype.takeOff = function(){
    console.log(" the airplane is taking off.")
}
Object.setPrototypeOf(Airplane.prototype,vehicle.prototype)

let NewAirplane = new Airplane("Indigo", "A320", "600 km/h", "Kerosene", 2 , true);
console.log( NewAirplane)