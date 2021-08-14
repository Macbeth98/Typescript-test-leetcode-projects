export {};

class ListNode {
  val: number;
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined? 0: val;
    this.next = next === undefined? null: next
  }
}

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {

  let sumNode = new ListNode();

  let sn = sumNode;

  let node1 = l1;
  let node2 = l2;

  let carry = 0;

  while(node1 || node2){

    let n1 = node1?.val? node1.val: 0;
    let n2 = node2?.val? node2.val: 0;

    let add = carry + n1 + n2;

    let values = add > 9? [ ((add - ( add%10 )) /10 ), add%10 ]: [0, add];

    add = values[1];
    carry = values[0];

    sn.val = add;

    node1 = node1?.next? node1.next: null;
    node2 = node2?.next? node2.next: null;

    if(node1 || node2){
      sn.next = new ListNode();
      sn = sn.next;
    }

  }

  if(carry > 0) {
    sn.next = new ListNode(carry);
  }

  return sumNode;
};