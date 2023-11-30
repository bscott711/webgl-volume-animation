class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    honk() {
        console.log("beep");
    }
}

var car = new Car("ford", "explorer", "2005");

car.honk();

var name = "Jilli";

const greeting = `Hello my name is ${name}`;