var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.length = 0;
  this.storage = {};
};

Queue.prototype.size = function() {
  // body...
  return this.length;
};

Queue.prototype.enqueue = function(value) {
  this.length++;
  this.storage[value] = value;
};

Queue.prototype.dequeue = function() {
  if(this.length !== 0) {
    this.length--;
  }
  var temp = this.storage[Object.keys(this.storage)[0]];
  delete this.storage[Object.keys(this.storage)[0]];
  return temp;
};


