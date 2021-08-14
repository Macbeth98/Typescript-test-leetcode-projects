export {};

const today = new Date();

const person = {
  age: 20
}

class Color {

}

const red = new Color();

let apples: number = 5;

let nothingMuch: null = null;

let nothing: undefined = undefined;

// built in objects

let now: Date =  new Date();

// Array
let colors: string[] = ['red', 'green', 'blue'];
let numbers: number[] = [1, 2, 3];

let numbSring = [1, 2, '345', 'yes', 6]

// Classes
class Car {

}
let car: Car = new Car();

// Object literal
let point: { x: number; y: number } = {
  x: 10,
  y: 20
}

// Function
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
}


const json = '{"x": 10, "y": 20}';
const coordinates: { x: number; y: number } = JSON.parse(json);


// type cannot be inferred
let numbers12 = [-10, -1, 12];
let numberAboveZero: boolean | number = false;

for (let i=0; i < numbers12.length; i++ ){
  if(numbers12[i] > 0) numberAboveZero = numbers12[i];
}

// functions stuff here

const add = (a: number, b: number): number => {
  return a + b;
}

const sub = (a: number, b: number): number => {
  return a - b;
}

const mul = function(a: number, b: number): number {
  return a * b;
}

const logger = (message: string): void => {
  console.log(message);
  return ;
}

const throwError = (msg: string): never => {
  throw (msg);
}

const throwErrorCondition = (msg: string): string => {
  
  if (!msg) throw (msg);

  return msg;
}

const todaysWeather = {
  date: new Date(),
  weather: 'sunny'
}

const logWeather = (forecast: {date: Date; weather: string;}): void => {
  console.log(forecast);
  return ;
}

// ES2015

const logWeatherES2015 = ({ date, weather }: {date: Date; weather: string;}): void => {
  console.log(date, weather);
  return ;
}

logWeather(todaysWeather);

// Objects

const profile = {
  name_pro: 'alex',
  age: 20,
  coords: {
    lat: 0,
    lng: 15
  },
  setAge (age: number): void {
    this.age = age;
    return ;
  }
}

const { age, name_pro }: { age: number; name_pro: string } = profile;
const { coords: { lat, lng } }: { coords: { lat: number; lng: number } } = profile;