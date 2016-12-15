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
  //debugger;
  if ( this.value === target) {
    return true;
  }
  var result = false;

  var searchChildren = function( childNodes ) {
    for ( var i = 0; i < childNodes.length; i++ ) {
      if ( childNodes[i].value === target ) {
        result = true;
      } else if ( childNodes[i].children !== undefined ) {
        searchChildren(childNodes[i]);
      }
    }
  };

  searchChildren(this.children);
  return result;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
