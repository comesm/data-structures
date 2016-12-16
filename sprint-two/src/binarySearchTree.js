var BinarySearchTree = function(value) {
  var newBsTree = {};
  newBsTree.value = value;
  newBsTree.right = undefined;
  newBsTree.left = undefined;
  return _.extend(newBsTree, bsTreeMethods);
};

var bsTreeMethods = {};

//avg: O(log n)
//worst: O(n)
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

//avg: O(log n)
//worst: O(n)
bsTreeMethods.contains = function( value ) {
  var tree = this;
  var result = false;
  var checkTree = function(currentTree) {
    if ( currentTree.value === value ) {
      result = true;
      return;
    }
    if (currentTree.right === undefined && currentTree.left === undefined) {
      result = false;
      return;
    }
    if ( currentTree.value > value) {
      checkTree(currentTree.left);
    } else {
      checkTree(currentTree.right);
    }
  };
  checkTree(tree);
  return result;
};

//O(n)
bsTreeMethods.depthFirstLog = function(callback) {
  var tree = this;

  var checkTree = function(currentTree) {
    currentTree.value = callback(currentTree.value);
    if (currentTree.right === undefined && currentTree.left !== undefined) {
      checkTree(currentTree.left);
    } else if (currentTree.right !== undefined && currentTree.left === undefined) {
      checkTree(currentTree.right);
    } else {
      return;
    }
  };
  checkTree(tree);
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
