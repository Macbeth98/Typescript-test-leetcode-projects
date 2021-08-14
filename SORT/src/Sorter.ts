// interface Sortable {
//   length: number;
//   compare(leftIndex: number, rightIndex: number): boolean;
//   swap(leftIndex: number, rightIndex: number): void;
// }

export abstract class Sorter {

  abstract compare(leftIndex: number, rightIndex: number): boolean;
  abstract swap(leftIndex: number, rightIndex: number): void;
  abstract length: number;

  sortBadApproach(): void {
    const { length } = this;

    for (let i = 0; i < length; i++){
      for (let j = 0; j < length - i - 1; j++){

        // All of this for Array
        // checking by type Guard
        // this is for custom type like Object, class
        if(this instanceof Array){
          if(this[j] > this[j+1]) {
            const leftHand = this[j];
            this[j] = this[j+1];
            this[j+1] = leftHand;
          }
        }
        
        //All of this for String
        // by using type Guard
        // typeof is for primitive types like number, boolean, string
        if(typeof this === 'string') {

        }

      }
    }
  }

  sort(): void {
    const { length } = this;

    for (let i = 0; i < length; i++){
      for (let j = 0; j < length - i - 1; j++){
        if(this.compare(j, j+1)) {
          this.swap(j, j+1);
        }
      }
    }
  }

}