@classDecorator
class Boat {
  @testDescorator
  color: string = 'red';

  @testDescorator
  get formattedColor(): string {
    return `The boat color is ${this.color}`;
  }

  @logError('Oops Boat was sunk....!')
  pilot(@parameterDecorator speed: string, @parameterDecorator generateWake: boolean): void {
    if(speed === "fast"){
      console.log('swish...');
    } else throw new Error();
  }
}

function classDecorator(constructor: typeof Boat) {
  console.log(constructor);
}

function parameterDecorator(target: any, key: string, index: number) {
  console.log(key, index);
}

function testDescorator (target: any, key: string) {
  console.log(key);
}

function logErrorNoParams(target: any, key: string, desc: PropertyDescriptor): void {
  const method = desc.value;

  desc.value = function () {
    try {
      method();
    } catch (e){
      console.log('Oops, Boat Sunked!.....')
    }
  }
}

function logError(err_msg: string) {
  return function (target: any, key: string, desc: PropertyDescriptor): void {
    const method = desc.value;
  
    desc.value = function () {
      try {
        method();
      } catch (e){
        console.log(err_msg);
      }
    }
  }
}