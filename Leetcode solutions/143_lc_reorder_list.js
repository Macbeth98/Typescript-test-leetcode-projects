/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {
  let current = head;

  // reverse the List.
  let prev = null;
  while (current) {
    let next = current.next;
    current.next = prev;
    current = next;
  }

  let reverse = prev;

  // merge two lists
  let h1 = head;
  let h2 = reverse;

  while (h2) {
    let next = h1.next;
    h1.next = h2;
    h2 = h2.next;
    h1.next.next = next;
    h1 = h1.next.next;
  }

  return head;
};
