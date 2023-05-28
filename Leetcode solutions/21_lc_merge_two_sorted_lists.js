/**
 * 21. Merge Two Sorted Lists
Easy
18.1K
1.7K
Companies
You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list.

 

Example 1:


Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]
Example 2:

Input: list1 = [], list2 = []
Output: []
Example 3:

Input: list1 = [], list2 = [0]
Output: [0]
 

Constraints:

The number of nodes in both lists is in the range [0, 50].
-100 <= Node.val <= 100
Both list1 and list2 are sorted in non-decreasing order.
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  let l1 = list1,
    l2 = list2;

  if (l1 && l2 && list1.val > list2.val) {
    l1 = list2;
    l2 = list1;

    list2 = l2;
    list1 = l1;
  }

  let prevl1 = null;

  while (l1 && l2) {
    if (l1.val === l2.val) {
      let l1_next = l1.next;
      l1.next = l2;
      let l2_next = l2.next;
      l2.next = l1_next;
      l2 = l2_next;
      prevl1 = l1.next;
      l1 = l1.next.next;
    } else if (l1.val < l2.val) {
      prevl1 = l1;
      l1 = l1.next;
    } else {
      prevl1.next = l2;
      let l2_next = l2.next;
      prevl1.next.next = l1;
      l2 = l2_next;
      prevl1 = prevl1.next;
    }
  }

  if (l2) {
    if (prevl1) prevl1.next = l2;
    else list1 = l2;
  }

  return list1;
};

var mergeTwoLists = function (l1, l2) {
  var mergedHead = { val: -1, next: null },
    crt = mergedHead;
  while (l1 && l2) {
    if (l1.val > l2.val) {
      crt.next = l2;
      l2 = l2.next;
    } else {
      crt.next = l1;
      l1 = l1.next;
    }
    crt = crt.next;
  }
  crt.next = l1 || l2;

  return mergedHead.next;
};
