// Given a pointer to the head element of a linked list, write a function that also takes an integer parameter k and returns the kth to last node of the list.

class ListNode {
 constructor(value) {
   this.value = value;
   this.next = null;
 }
}

let a = new ListNode("Australian Sheperd");
let b = new ListNode("Beagle");
let c = new ListNode("Cairne Terrier");
let d = new ListNode("Dobermann");
let e = new ListNode("English Mastiff");

a.next = b;
b.next = c;
c.next = d;
d.next = e;

kthToLastNode = (num, node) => {
  let counter = 1
  let obj = {}

  while(true){
    obj[counter] = node
    counter = counter + 1
    if (node.next === null){
      {break}
    }
    node = node.next
  }
  let return_v = counter - num
  return obj[return_v].value
}

kthToLastNode(2, a);

kthToLastNode2 = (num, node) => {
  let i = 0
  let rightNode = node
  while(i < num){
    rightNode = node.next
    i++
  }
  while (true){
    node = node.next
    rightNode = node.next
    if (rightNode.next === null){
      {break}
    }
  }
  console.log(node.value)
}

kthToLastNode2(2, a);