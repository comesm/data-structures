var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = {
    length: 0,
    storage: {}
  };
  return _.extend(obj, stackMethods);
};

var stackMethods = {
  size: function() { return this.length; },
  push: function( value ) {
    this.length++;
    this.storage[value] = value;
  },
  pop: function() {
    if ( this.length !== 0 ) {
      this.length--;
    }
    var temp = this.storage[Object.keys(this.storage)[Object.keys(this.storage).length - 1]];
    console.log(this.storage);
    delete this.storage[Object.keys(this.storage)[Object.keys(this.storage).length - 1]];
    return temp;
  }
};


