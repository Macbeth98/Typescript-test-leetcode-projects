var ListNode = /** @class */ (function () {
    function ListNode(data) {
        this.data = data;
        this.next = null;
    }
    return ListNode;
}());
function getIntersectionElementListNode(headA, headB) {
    var commonElement = null;
    if (headA === null || headB === null) {
        return null;
    }
    var listA = headA;
    var listB = headB;
    var listASize = 0;
    var listBSize = 0;
    while (listA !== null || listB !== null) {
        if (listA !== null) {
            listASize++;
            listA = listA.next;
        }
        if (listB !== null) {
            listBSize++;
            listB = listB.next;
        }
    }
    var largeList, smallList;
    var deltaList = Math.abs(listASize - listBSize);
    if (listASize > listBSize) {
        largeList = headA;
        smallList = headB;
    }
    else {
        largeList = headB;
        smallList = headA;
    }
    while (largeList !== null) {
        if (deltaList > 0) {
            deltaList--;
            largeList = largeList.next;
            continue;
        }
        if (largeList === smallList) {
            commonElement = largeList;
            break;
        }
        else {
            largeList = largeList.next;
            smallList = (smallList === null || smallList === void 0 ? void 0 : smallList.next) ? smallList.next : null;
        }
    }
    return commonElement;
}
function createTwoLinkedLists() {
    var uniqueA = parseInt("" + Math.random() * 10);
    var uniqueB = parseInt("" + Math.random() * 10);
    var common = parseInt("" + Math.random() * 10);
    var dataListA = [];
    var dataListB = [];
    var headA = new ListNode(1);
    var headB = new ListNode(2);
    dataListA.push(1);
    dataListB.push(2);
    var nextA = headA;
    var nextB = headB;
    var i = 2;
    while (uniqueA || uniqueB) {
        if (uniqueA > 0) {
            nextA.next = new ListNode(++i);
            dataListA.push(i);
            nextA = nextA.next;
            uniqueA--;
        }
        if (uniqueB > 0) {
            nextB.next = new ListNode(++i);
            dataListB.push(i);
            nextB = nextB.next;
            uniqueB--;
        }
    }
    var commonListNode = new ListNode(++i);
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
    return { headA: headA, headB: headB };
}
function main() {
    var _a = createTwoLinkedLists(), headA = _a.headA, headB = _a.headB;
    console.log(headA);
    console.log(headB);
    var intersectionListNode = getIntersectionElementListNode(headA, headB);
    console.log(intersectionListNode);
    return;
}
main();
