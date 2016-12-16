var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me
  return _.extend(newTree, treeMethods);
  //return newTree;
};

var treeMethods = {};
//O(1)
treeMethods.addChild = function(value) {
  var newChildTree = Tree(value);
  this.children.push(newChildTree);
};
//O(n)
treeMethods.contains = function(target) {
  if ( this.value === target) {
    return true;
  }
  var result = false;

  var searchChildren = function( childNodes ) {
    for ( var i = 0; i < childNodes.length; i++ ) {
      if ( childNodes[i].value === target ) {
        result = true;
        return;
      } else if ( childNodes[i].children !== undefined ) {
        searchChildren(childNodes[i].children);
      }
    }
  };

  searchChildren(this.children);
  return result;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
