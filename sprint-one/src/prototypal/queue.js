var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newQueue = Object.create(queueMethods);
  newQueue.storage = {};
  newQueue.length = 0;
  return newQueue;
};

var queueMethods = {};

queueMethods.size = function() {
  return this.length;
};

queueMethods.enqueue = function() {
  this.length++;

};

queueMethods.dequeue = function() {
  if (this.length !== 0) {
    this.length --;
  }

};