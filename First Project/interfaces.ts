const oldCivic = {
  name: 'Civic',
  year: 2000,
  broken: true,
  summary(): string {
    return `Name: ${this.name}`
  }
}

const printVehicle = (vehicle: {name: string; year: number; broken: boolean}): void => {
  console.log(vehicle);
}

printVehicle(oldCivic);

//interface

interface Vehicle {
  name: string;
  summary(): string;
}

const newCivic: Vehicle = {
  name: 'Civic',
  summary(): string {
    return `Name: ${this.name}`
  }
}

const printVehicleInte = (vehicle: Vehicle): void => {
  console.log(vehicle.summary());
}

printVehicleInte(oldCivic);
printVehicleInte(newCivic);


export {};
