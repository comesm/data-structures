var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;
  // Implement the methods below
  //
  someInstance.enqueue = function(value) {
    storage[value] = value;
    size++;
  };

  someInstance.dequeue = function() {
    var temp = storage[Object.keys(storage)[0]];
    delete storage[Object.keys(storage)[0]];
    if (size !== 0) {
      size--;
    }
    return temp;
  };

  someInstance.size = function() {
    return size;
  };

  return someInstance;
};

