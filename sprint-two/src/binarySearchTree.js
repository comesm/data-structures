var BinarySearchTree = function(value) {
  var newBsTree = {};
  newBsTree.value = value;
  newBsTree.right = undefined;
  newBsTree.left = undefined;
  return _.extend(newBsTree, bsTreeMethods);
};

var bsTreeMethods = {};

bsTreeMethods.insert = function(value) {
  var tree = this;
  var newTree = BinarySearchTree(value);
  var checkTree = function(currentTree) {
    if (newTree.value > currentTree.value) {
      if (currentTree.right === undefined) {
        currentTree.right = newTree;
      } else {
        checkTree(currentTree.right);
      }
    } else if (newTree.value < currentTree.value) {
      if (currentTree.left === undefined) {
        currentTree.left = newTree;
      } else {
        checkTree(currentTree.left);
      }
    }
  };
  checkTree(tree);    
};

bsTreeMethods.contains = function() {};

bsTreeMethods.depthFirstLog = function() {};


/*
 * Complexity: What is the time complexity of the above functions?
 */
