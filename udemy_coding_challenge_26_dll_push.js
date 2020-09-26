/*
JavaScript Algorithms and Data Structures Masterclass

Implement the following on a doubly linked list.

push

This function should accept a value add a node to the end of a doubly linked list with that given value.  It should return the doubly linked list.
*/

class Node{
    constructor(val){
        this.val = val
        this.next = null;      
        this.prev = null;      
    }
}

class DoublyLinkedList{
    constructor(val){
        this.head = null;
        this.tail = null;
        this.length = 0;     
    }
    push(val){
      let node = new Node(val);
      if(this.length === 0) {
          this.head = node;
          this.tail = node;
      } else {
          this.tail.next = node;
          node.prev = this.tail;
          this.tail = node;
      }
      this.length++;
      return this;
    }
    
}
