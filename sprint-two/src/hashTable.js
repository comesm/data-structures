var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var obj = {};
  obj[k] = v;
  var index = getIndexBelowMaxForKey(k, this._limit);
  if ( this._storage.get(index) === undefined ) {
    this._storage.set(index, obj);  
  } else {
    var temp = this._storage.get(index);
    temp[k] = v;
    this._storage.set(index, temp);
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var result = this._storage.get(index);
  return result[k];
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  this._storage.each(function(value, storageIndex, storageArray) {
    if (storageIndex === index) {
      for ( var key in value ) {
        if (key === k) {
          delete value[k];
        }
      }
    }
  });
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


