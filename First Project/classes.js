"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Vehicle = /** @class */ (function () {
    // One Way ---> another way below
    // color: string;
    // constructor(color: string){
    //   this.color = color;
    // }
    function Vehicle(color) {
        this.color = color;
    }
    Vehicle.prototype.honk = function () {
        console.log('beep');
    };
    return Vehicle;
}());
var vehicle = new Vehicle('red');
// vehicle.drive();
// vehicle.honk();
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car(wheels, color) {
        var _this = _super.call(this, color) || this;
        _this.wheels = wheels;
        return _this;
    }
    Car.prototype.drive = function () {
        console.log('Override Main Vehicle Drive');
    };
    Car.prototype.startDriving = function () {
        this.drive();
        this.honk();
    };
    return Car;
}(Vehicle));
var car = new Car(4, 'orange');
console.log(car.wheels, car.color);
car.color = 'white';
car.wheels = 8;
console.log(car.wheels, car.color);
car.startDriving();
