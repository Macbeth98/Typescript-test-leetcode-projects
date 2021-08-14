class ArrayOfNumbers{
  constructor(public collection: number[]){}

  get (index: number): number{
    return this.collection[index];
  }
}

class ArrayOfStrings{
  constructor(public collection: string[]){}

  get(index: number): string {
    return this.collection[index];
  }
}


// GENERIC CLASS
class ArrayOfAnything<T> {
  constructor (public collection: T[]){}

  get(index: number): T{
    return this.collection[index];
  }
}

const strs = new ArrayOfAnything<string>(['man', 'ijyggu']);

const numbs = new ArrayOfAnything([1, 24, 56, 6]); // type inference applies to generic classes as well

// function Generics

function printStrings(arr: string[]): void{
  for (let i=0; i<arr.length; i++){
    console.log(arr[i]);
  }
}

function printNumbers(arr: number[]): void{
  for (let i=0; i<arr.length; i++){
    console.log(arr[i]);
  }
}

function printAnything<T> (arr: T[]): void{
  for (let i=0; i<arr.length; i++){
    console.log(arr[i]);
  }
}

printAnything<string>(['a', 'b', 'c']);
printAnything([1, 2, 34,5 ]);  // type inference applies to generic functions as well

// Generic Constraints

class Car {
  print(){
    console.log('I am a Car');
  }
}

class House {
  print(){
    console.log('I am a House');
  }
}

interface Printable{
  print(): void
}

function printHousesOrCars<T extends Printable>(arr: T[]): void {
  for (let i=0; i<arr.length; i++){
    arr[i].print();
  }
}

printHousesOrCars([new Car(), new Car()]);
printHousesOrCars<House>([new House(), new House()]);