/*

Write a function to delete a node in a singly-linked list. You will not be given access to the head of the list, instead you will be given access to the node to be deleted directly.

It is guaranteed that the node to be deleted is not a tail node in the list.

*/

var deleteNode = function(node) {

  var nextNode = node.next;
  var following = node.next.next;

  node.val = nextNode.val;
  node.next = following;

};


var deleteNode = function(node) {

  node.val = node.next.val;
  node.next = node.next.next;

};

