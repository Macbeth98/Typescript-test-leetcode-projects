import 'reflect-metadata';

// const plane = {
//   color: 'red'
// } 

// Reflect.defineMetadata('note', 'hi there', plane);
// Reflect.defineMetadata('height', 10, plane);

// console.log(plane);

// const note = Reflect.getMetadata('note', plane);
// const height = Reflect.getMetadata('height', plane);

// console.log(note, height);


// Reflect.defineMetadata('note', 'hello world', plane, 'color');

// const propNote = Reflect.getMetadata('note', plane, 'color');

// console.log(propNote);

@printMetadata
class Plane {
  color: string = 'red';

  @markFunction('Hello World!')
  fly(): void {
    console.log('vrrrrrrrr');
  }
}

function markFunction (secretInfo: string) {
  return function (target: Plane, key: string) {
    console.log('secret Info...', secretInfo);
    Reflect.defineMetadata('secret', secretInfo, target, key);
  }
}
// const secret = Reflect.getMetadata('secret', Plane.prototype, 'fly');

// console.log(secret);

function printMetadata(target: typeof Plane) {
  console.log('target in here..');
  console.log(target.prototype);
  console.log(target);
  for (let key in target.prototype){
    console.log('key.....', key);
    const secret = Reflect.getMetadata('secret', target.prototype, key);
    console.log('secret.....', secret);
    console.log(secret);
  }
  console.log('Done....')
}