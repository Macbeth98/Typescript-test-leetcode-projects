"use strict";
// interface Sortable {
//   length: number;
//   compare(leftIndex: number, rightIndex: number): boolean;
//   swap(leftIndex: number, rightIndex: number): void;
// }
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sorter = void 0;
var Sorter = /** @class */ (function () {
    function Sorter() {
    }
    Sorter.prototype.sortBadApproach = function () {
        var length = this.length;
        for (var i = 0; i < length; i++) {
            for (var j = 0; j < length - i - 1; j++) {
                // All of this for Array
                // checking by type Guard
                // this is for custom type like Object, class
                if (this instanceof Array) {
                    if (this[j] > this[j + 1]) {
                        var leftHand = this[j];
                        this[j] = this[j + 1];
                        this[j + 1] = leftHand;
                    }
                }
                //All of this for String
                // by using type Guard
                // typeof is for primitive types like number, boolean, string
                if (typeof this === 'string') {
                }
            }
        }
    };
    Sorter.prototype.sort = function () {
        var length = this.length;
        for (var i = 0; i < length; i++) {
            for (var j = 0; j < length - i - 1; j++) {
                if (this.compare(j, j + 1)) {
                    this.swap(j, j + 1);
                }
            }
        }
    };
    return Sorter;
}());
exports.Sorter = Sorter;
