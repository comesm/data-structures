var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};
//O(1)
HashTable.prototype.insert = function(k, v) {
  var tuple = [];
  tuple.push([k, v]);
  var index = getIndexBelowMaxForKey(k, this._limit);
  if ( this._storage.get(index) === undefined ) {
    this._storage.set(index, tuple);
  } else {
    var temp = this._storage.get(index);
    if (this.retrieve(k) === undefined) {
      temp.push([k, v]);
      this._storage.set(index, temp);
    } else {
      for ( var i = 0; i < temp.length; i++) {
        if ( temp[i][0] === k ) {
          temp[i][1] = v;
        }
      }
      this._storage.set(index, temp);
    }
  }
};
//O(1)
HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var result = this._storage.get(index);
  for ( var i = 0; i < result.length; i++) {
    var tuple = result[i];
    console.log(tuple);
    if (tuple[0] === k) {
      return tuple[1];
    }
  }
};
//O(n)
HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  this._storage.each(function(tupleArray, storageIndex, storageArray) {
    if (storageIndex === index) {
      for ( var i = 0; i < tupleArray.length; i++) {
        if ( tupleArray[i][0] === k ) {
          tupleArray.splice(tupleArray.indexOf(tupleArray[i]), 1);
        }
      }
    }
  });
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


