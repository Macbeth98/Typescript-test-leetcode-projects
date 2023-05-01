class ListNode {
  next: ListNode | null = null;

  constructor (public data: number) {}
}

function getIntersectionElementListNode (headA: ListNode, 
  headB: ListNode): ListNode | null {

  let commonElement: ListNode | null = null;

  if (headA === null || headB === null) {
    return null;
  }

  let listA: ListNode | null = headA;
  let listB: ListNode | null = headB;

  let listASize: number = 0;
  let listBSize: number = 0;

  while (listA !== null || listB !== null) {

    if(listA !== null) {
      listASize++;
      listA = listA.next;
    }

    if(listB !== null) {
      listBSize++;
      listB = listB.next;
    }
    
  }

  let largeList: ListNode | null, smallList: ListNode | null;

  let deltaList = Math.abs(listASize - listBSize);

  if(listASize > listBSize) {
    largeList = headA;
    smallList = headB;
  } else {
    largeList = headB;
    smallList = headA;
  }

  while (largeList !== null) {

    if(deltaList > 0) {
      deltaList--;
      largeList = largeList.next;
      continue ;
    }

    if(largeList === smallList) {
      commonElement = largeList;
      break;
    } else {
      largeList = largeList.next;
      smallList = smallList?.next? smallList.next: null;
    }

  }

  return commonElement;

}


function createTwoLinkedLists (): {headA: ListNode, headB: ListNode}  {

  let uniqueA = parseInt("" + Math.random() * 10);
  let uniqueB = parseInt("" + Math.random() * 10);
  let common = parseInt("" + Math.random() * 10);

  let dataListA: number[] = [];
  let dataListB: number[] = [];

  let headA = new ListNode(1);
  let headB = new ListNode(2);

  dataListA.push(1);
  dataListB.push(2);

  let nextA: ListNode = headA;
  let nextB: ListNode = headB;

  let i = 2;

  while (uniqueA || uniqueB) {

    if(uniqueA > 0) {
      nextA.next = new ListNode(++i);
      dataListA.push(i);
      nextA = nextA.next;
      uniqueA--;
    }

    if(uniqueB > 0) {
      nextB.next = new ListNode(++i);
      dataListB.push(i);
      nextB = nextB.next;
      uniqueB--;
    }

  }

  let commonListNode = new ListNode(++i);

  nextA.next = commonListNode;
  nextB.next = commonListNode;

  dataListA.push(i);
  dataListB.push(i);

  while (common) {
    commonListNode.next = new ListNode(++i);
    commonListNode = commonListNode.next;
    dataListA.push(i);
    dataListB.push(i);
    common--;
  }

  console.log(dataListA);
  console.log(dataListB);

  return {headA, headB};

}

function main() {

  const { headA, headB }: {headA: ListNode, headB: ListNode} = createTwoLinkedLists();

  console.log(headA);
  console.log(headB);

  let intersectionListNode = getIntersectionElementListNode(headA, headB);

  console.log(intersectionListNode);

  return;

}

main();