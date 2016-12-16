var BinarySearchTree = function(value) {
  var newBsTree = {};
  newBsTree.value = value;
  newBsTree.right = undefined;
  newBsTree.left = undefined;
  return _.extend(newBsTree, bsTreeMethods);
};

var bsTreeMethods = {};

bsTreeMethods.insert = function() {};

bsTreeMethods.contains = function() {};

bsTreeMethods.depthFirstLog = function() {};


/*
 * Complexity: What is the time complexity of the above functions?
 */
