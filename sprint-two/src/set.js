var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {}; // fix me
  return set;
};

var setPrototype = {};
//O(1)
setPrototype.add = function(item) {
  this._storage[item] = item;
};
//O(n)
setPrototype.contains = function(item) {
  for (var key in this._storage) {
    if (key === item) {
      return true;
    }
  }
  return false;
};
//O(n)
setPrototype.remove = function(item) {
  for (var key in this._storage) {
    if (key === item) {
      delete this._storage[key];
    }
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
