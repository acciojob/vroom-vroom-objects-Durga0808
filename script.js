// Complete the js code
class Car {
	constructor(make, model){
		this.make=make;
		this.model=model;
	}

	getMakeModel(){
		return this.model;
	}
}

class SportsCar {
	constructor(make, model, topSpeed){
		super(make,model);
		this.topSpeed=topSpeed;
	}

	getToSpeed(){
		return this.topSpeed;
	}
}

// Do not change the code below
window.Car = Car;
window.SportsCar = SportsCar;
