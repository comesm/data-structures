var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  //o(1)
  list.addToTail = function(value) {
    var newNode = Node(value);
    if ( list.head === null ) {
      list.head = newNode;
      list.tail = newNode;
    } else {
      list.tail.next = newNode;
      list.tail = newNode;
    }
  };

  //o(1)
  list.removeHead = function() {
    if (list.head === list.tail) {
      var temp = list.head;
      list.head = null;
      list.tail = null; 
      return temp.value;
    }
    var temp = list.head.next;
    list.head.next = null;
    list.head = temp;
    return temp;
  };

  //0(n)
  list.contains = function(target) {
    var currentNode = list.head;
    while (currentNode !== null) {
      if(currentNode.value === target) {
        return true;
      }
      currentNode = currentNode.next;
    }
    return false;

  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
