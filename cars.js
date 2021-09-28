class Vehicle
{
    //constructor with arguments
    constructor(make,model,year){
        this.make = make;
        this.model = model;
        this.year = year;
    }
    //method
    Information(){
        //log make model and year to screen
        console.log(`Make: ${this.make}`);
        console.log(`Model: ${this.model}`);
        console.log(`Year: ${this.year}`);
    }

}

//child class called vehicle that extends car class
class Cars extends Vehicle
{
    //constructor - added doors argument
    constructor(make, model, year, doors){
        //invoke constructor on the parent class - use 'super'
        super(make, model, year);
        this.doors = doors;
    }
    
    //method
    Information(){
        //invoke method on vehicle class - use 'super'
        super.Information();
        console.log(`Doors: ${this.doors}`);
    }
}

//variable
let myCar = new Cars('VW', 'POLO', 2021, 5);
myCar.Information();

// let myVehicle = new Vehicle('VW', 'GOLF', 2021);
// myVehicle.Information();