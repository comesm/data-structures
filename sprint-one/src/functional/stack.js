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
    size--;
    return Object.keys(storage)[0];
  };

  someInstance.size = function() {
    return size;
  };

  return someInstance;
};
