var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.length = 0;
  this.storage = {};
};

Stack.prototype.size = function() {
  return this.length;
};

Stack.prototype.push = function( value ) {
  this.length++;
  this.storage[value] = value;
};

Stack.prototype.pop = function() {
  if (this.length !== 0) {
    this.length--;
  }
  var temp = this.storage[Object.keys(this.storage)[Object.keys(this.storage).length - 1]];
  delete this.storage[Object.keys(this.storage)[Object.keys(this.storage).length - 1]];
  return temp;
};


