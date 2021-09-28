class BMI {

    //constructor initialises data within bmi class
    //arguments for height and weight
    constructor(height, weight) {
        //variables
        this.height = height;
        this.weight = weight;
    }

    //method
    calculateBMI() {
        //formula that calculates bmi
        let bmi = this.weight / (this.height ** 2);
        return bmi;
    }
}

//invoke the calculateBMI method
//print out bmi results to screen
let myBMI = new BMI(2, 90);
let calc = myBMI.calculateBMI();
console.log(calc);

