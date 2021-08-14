
class Vehicle {
  // One Way ---> another way below
  // color: string;

  // constructor(color: string){
  //   this.color = color;
  // }

  constructor (
    public color: string
  ){}

  protected honk(): void {
    console.log('beep')
  }
}

const vehicle = new Vehicle('red');
// vehicle.drive();
// vehicle.honk();

class Car extends Vehicle {

  constructor (
    public wheels: number, color: string
  ) {
    super(color);
  }

  private drive(): void {
    console.log('Override Main Vehicle Drive....now removed because the drive in the class vehicle was made private')
  }

  startDriving(): void {
    this.drive();
    this.honk();
  }
}

const car = new Car(4, 'orange');
console.log(car.wheels, car.color);
car.color = 'white';
car.wheels = 8;
console.log(car.wheels, car.color);
car.startDriving();
// car.honk();

export {};