var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = {
    storage: {},
    length: 0
  };

  return _.extend(obj, queueMethods);

};

var queueMethods = {
  size: function() {
    return this.length;
  },

  enqueue: function(value) {
    this.storage[value] = value; 
    this.length++;
  },
  dequeue: function() {
    var temp = this.storage[Object.keys(this.storage)[0]];
    delete this.storage[Object.keys(this.storage)[0]];



    if (this.length !== 0) {
      this.length--;
    }
    return temp;
  }

};


