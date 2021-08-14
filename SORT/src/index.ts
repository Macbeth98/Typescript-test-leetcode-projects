import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";


const numberCollection = new NumbersCollection([10, 3, -5, 0, 1, 2, 89]);
// const sorter_num = new Sorter(numberCollection);
// sorter_num.sort();
numberCollection.sort();
console.log(numberCollection.data);

const charactersCollection = new CharactersCollection('XaayB');
// const sorter_char = new Sorter(charactersCollection);
// sorter_char.sort();
charactersCollection.sort();
console.log(charactersCollection.data);

const linkedList =  new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(4);
linkedList.add(-3);

// const sorter_ll =  new Sorter(linkedList);
// sorter_ll.sort();
linkedList.sort();
linkedList.print();