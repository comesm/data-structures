var DoublyLinkedList = function( value ) {
  this.head = null;
  this.tail = null;
};

DoublyLinkedList.prototype.addToHead = function( value ) {

  var newNode = Node(value);
//  var temp = this.head;
  if (this.head === null) {
    this.head = newNode;
    this.tail = newNode;

  } else {
    var temp = this.head.next;
    this.head = newNode;
    this.head.next = temp;
    this.head.next.prev = this.head;
  }

  // body...
};

DoublyLinkedList.prototype.removeTail = function() {
  if (this.tail !== null) {
    var temp = this.tail.prev;
    temp.next = null;
    this.tail = temp;
    console.log(this.tail);
  }
};

DoublyLinkedList.prototype.removeHead = function() {
  if (this.head !== null) {
    var temp = this.head;
    this.head = this.head.next;
    //debugger;
    //this.head.prev = null;
    return temp.value;
    //this.head.next = temp.next.next; 
  }
};

DoublyLinkedList.prototype.addToTail = function( value ) {
  var newNode = Node(value);
  if (this.head === null){
    this.head = newNode;
    this.tail = newNode;
  } else {
    var temp = this.tail;
    this.tail = newNode;
    temp.next = newNode;
    newNode.prev = temp;  
  }
};

DoublyLinkedList.prototype.contains = function( value ) {
  // body...
  var currentNode = this.head;
  if (currentNode.value === value) {
    return true;
  }
  //debugger;
  while (currentNode !== null) {
    if (currentNode.value === value) {
      return true;
    }  
    currentNode = currentNode.next;
  }
  return false;
};

var Node = function( value ) {
  var node = {};
  node.value = value;
  node.next = null;
  node.prev = null;
  return node;
};


