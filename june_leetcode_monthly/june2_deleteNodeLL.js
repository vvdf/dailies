/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function(node) {
  let prevNode = node;
  while (!!node.next) {
    node.val = node.next.val;
    prevNode = node;
    node = node.next;
  }
  prevNode.next = prevNode.next.next;
};