var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this.size = 0;
};
//O(1)
HashTable.prototype.insert = function(k, v) {
  var tuple = [];
  tuple.push([k, v]);
  var index = getIndexBelowMaxForKey(k, this._limit);
  if ( this._storage.get(index) === undefined ) {
    this._storage.set(index, tuple);
    this.size++;
  } else {
    var temp = this._storage.get(index);
    if (this.retrieve(k) === undefined) {
      temp.push([k, v]);
      this._storage.set(index, temp);
      this.size++;
    } else {
      for ( var i = 0; i < temp.length; i++) {
        if ( temp[i][0] === k ) {
          temp[i][1] = v;
        }
      }
      this._storage.set(index, temp);
      this.size++;    
    }
  }
  if (this.size / this._limit > 0.75) {
    //console.log(this.size / this._limit > 0.75);
    this.resize();
  }
};

HashTable.prototype.resize = function() {
  // body...
  var newLimit = this._limit * 2;
  console.log(newLimit);
  var tempStorage = LimitedArray(newLimit);
  //create a temporary storage
  console.log('42 ' + tempStorage);
  for (var i = 0; i < this._limit; i++) {
    if (this._storage.get(i) !== undefined) {
      var tuples = this._storage.get(i);
      console.log(tuples);
      for ( var j = 0; j < tuples.length; j++) {
        var key = tuples[j][0];
        if (key === 'Alan') {
          //debugger;
          console.log('line 51');
        }
        var value = tuples[j][1];
        var index = getIndexBelowMaxForKey(key, newLimit);
        tempStorage.set(index, tuples);
      }
    }
  }
  
  this._limit = newLimit;
  //set this._storage equal to new storage
  this._storage = tempStorage;
};

//O(1)
HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var result = this._storage.get(index);
  for ( var i = 0; i < result.length; i++) {
    var tuple = result[i];
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


