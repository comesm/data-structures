// Instantiate a new graph
var Graph = function() {
  this.storage = {};
};

// Add a node to the graph, passing in the node's value.
//O(1)
Graph.prototype.addNode = function(node) {
  this.storage[node] = [];
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
//O(n)
Graph.prototype.contains = function(node) {
  for ( var key in this.storage ) {
    if ( key === JSON.stringify(node) ) {
      return true;
    }
  }
  return false;
};

// Removes a node from the graph.
//O(n*m) where m is the edge array of the node
Graph.prototype.removeNode = function(node) {
  for ( var key in this.storage ) {
    if ( key === JSON.stringify(node) ) {
      for ( var i = 0; i < this.storage[key].length; i++) {
        this.removeEdge(node, this.storage[key][i]);
      }
      delete this.storage[key];
    }
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
//O(n)
Graph.prototype.hasEdge = function(fromNode, toNode) {
  for ( key in this.storage ) {
    if ( key === JSON.stringify(fromNode)) {
      if ( this.storage[key].includes(toNode) ) {
        return true;
      }
    }
  }
  return false;
};

// Connects two nodes in a graph by adding an edge between them.
//O(n)
Graph.prototype.addEdge = function(fromNode, toNode) {
  for ( key in this.storage ) {
    if ( key === JSON.stringify(fromNode)) {
      this.storage[key].push(toNode);
    } else if ( key === JSON.stringify(toNode)) {
      this.storage[key].push(fromNode);
    }
  }
};

// Remove an edge between any two specified (by value) nodes.
//O(n)
Graph.prototype.removeEdge = function(fromNode, toNode) {
  for (var key in this.storage) {
    if(key === JSON.stringify(fromNode)) {
      if(this.storage[key].includes(toNode)) {
        this.storage[key].splice(this.storage[key].indexOf(toNode), 1);
      }
    }
    if(key === JSON.stringify(toNode)) {
      if(this.storage[key].includes(fromNode)) {
        this.storage[key].splice(this.storage[key].indexOf(fromNode), 1);
      }
    }
  }


};

// Pass in a callback which will be executed on each node of the graph.
//O(n)
Graph.prototype.forEachNode = function(cb) {
  for (var key in this.storage) {
    cb(parseInt(key));  
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


