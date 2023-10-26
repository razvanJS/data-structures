// 1. Use a constructor function to implement a 'Car'. A car has a 'make' and a 
// 'speed' property. The 'speed' property is the current speed of the car in 
// km/h
// 2. Implement an 'accelerate' method that will increase the car's speed by 10, 
// and log the new speed to the console
// 3. Implement a 'brake' method that will decrease the car's speed by 5, and log 
// the new speed to the console
// 4. Create 2 'Car' objects and experiment with calling 'accelerate' and 
// 'brake' multiple times on each of them
// Test data:
// § Data car 1: 'BMW' going at 120 km/h
// § Data car 2: 'Mercedes' going at 95 km/h

// function Car(make,speed){
//     this.make=make;
//     this.speed=speed;
// }
// Car.prototype.accelerate=function(){
//     this.speed=this.speed+10
// }
// Car.prototype.brake=function(){
//     this.speed=this.speed-5
// }

// const bmw=new Car('BMW',120)
// const mercedes=new Car('MERCEDES',95)


// bmw.accelerate()
// bmw.accelerate()
// bmw.brake()
// bmw.accelerate()
// console.log(bmw.speed)


// 1. Re-create Challenge #1, but this time using an ES6 class (call it 'CarCl')
// 2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide 
// by 1.6)
// 3. Add a setter called 'speedUS' which sets the current speed in mi/h (but 
// converts it to km/h before storing the value, by multiplying the input by 1.6)
// 4. Create a new car and experiment with the 'accelerate' and 'brake'
// methods, and with the getter and setter


// 1. Use a constructor function to implement an Electric Car (called 'EV') as a child
// "class" of 'Car'. Besides a make and current speed, the 'EV' also has the 
// current battery charge in % ('charge' property)
// 2. Implement a 'chargeBattery' method which takes an argument 
// 'chargeTo' and sets the battery charge to 'chargeTo'
// 3. Implement an 'accelerate' method that will increase the car's speed by 20, 
// and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140 
// km/h, with a charge of 22%'
// 4. Create an electric car object and experiment with calling 'accelerate', 
// 'brake' and 'chargeBattery' (charge to 90%). Notice what happens when 
// you 'accelerate'! Hint: Review the definiton of polymorphism 

class CarCl{
    constructor(make,speed){
        this.make=make;
        this.speed=speed
    }
    accelerate(){
       this.speed=this.speed+50
       return this

    }
  
  
    get speedUS(){
       return this.speed/1.6
    }

    set speedUS(speed){
        this.speed=speed*1.6
    }
 
    brake(){
        this.speed=this.speed-5
        return this
    }
}
class Ev extends CarCl{
    constructor(make,speed,charge){
        super(make,speed)
        if(charge<=100)this.charge=charge
        
    }
    chargeBattery(chargeTo){
        if(chargeTo<=100){
            this.charge=chargeTo
        }
       
        

    }
    accelerate(){
        this.speed=this.speed+20;
        this.charge=this.charge-1
        console.log(`${this.make} its going at ${this.speed} km/h ,whit a charge of ${this.charge}% `)
    }
}
const ford=new CarCl('Ford',100)
console.log(ford.accelerate().accelerate().accelerate().brake().brake())
console.log(ford.speedUS)//get
ford.speedUS=150
console.log(ford.speed)

const tesla=new Ev('Tesla',65,50)
console.log(tesla)
tesla.chargeBattery(90)
tesla.chargeBattery(95)
tesla.chargeBattery(100)
tesla.accelerate()
tesla.accelerate()
tesla.accelerate()
tesla.accelerate()
tesla.accelerate()
tesla.accelerate()
tesla.accelerate()
tesla.accelerate()
tesla.accelerate()
tesla.accelerate()
tesla.accelerate()
tesla.accelerate()
tesla.brake()
tesla.brake()
tesla.brake()
console.log(tesla)