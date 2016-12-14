var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;
  // Implement the methods below
  someInstance.push = function(value) {
    size++;
    storage[value] = value;
  };

  someInstance.pop = function() {
    if (size !== 0) {
      size--;
    }
    var temp = Object.keys(storage)[Object.keys(storage).length - 1];
    delete storage[Object.keys(storage)[Object.keys(storage).length - 1]];
    return temp;
  };

  someInstance.size = function() {
    return size;
  };

  return someInstance;
};
