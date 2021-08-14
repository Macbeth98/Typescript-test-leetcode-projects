export {};

const carMakers: string[] = ['ford', 'chevy'];

const dates = [new Date(), new Date()];

// 2D arrays

const carsByMake: string[][] = [
  ['f150'],
  ['cororla'],
  ['camaro']
];

// Help with inference when extracting values
const carMaker = carMakers[0]

const multiarr = ['sdsk', 23, true];
const mul1 = multiarr[1];

carMakers.map((car: string): string => {
  return car.toUpperCase();
})

// flexible types
const impDates: (Date | string)[] = [new Date(), '2021-07-21'];


// Tuples => similar to an Array => represents some property of a record
const drink = {
  color: 'brown',
  carboated: true,
  sugar: 40
}

const pepsi: [string, boolean, number] = ['brown', true, 40];   // tuple
// pepsi[0] = 40 will throw error

// typeAlias
type Drink = [string, boolean, number];

const coke: Drink = ['black', true, 50]

type CarO = {name: string, age: number};

const car1: CarO = {
  name: 'suz',
  age: 89,
}
