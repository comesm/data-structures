var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me
  return _.extend(newTree, treeMethods);
  //return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var newChildTree = Tree(value);
  this.children.push(newChildTree);
};

treeMethods.contains = function(target) {
  var result = false;
  var searchChildren = function( tree ) {
    if ( tree.value === target) {
      return true;
    }

    for ( var i = 0; i < tree.children.length; i++ ) {
      result = searchChildren(tree.children[i]);
    }
  };

  searchChildren(this);
  return result;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
