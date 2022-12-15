const Tree = require('./binary-search-tree');

// Driver code

// create random array of 14 elements
const createRandomArr = () => {
    return Array.from({length: 14}, () => Math.floor(Math.random() * 40));
}

let sampleArray = createRandomArr();
// let sampleArray = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];
const myTree = Tree(sampleArray);
myTree.prettyPrint()
console.log('is it balanced? ',myTree.isBalanced());
console.log('levelOrder: ', myTree.levelOrder());
console.log('inorder: ', myTree.inorder());
console.log('preorder: ', myTree.preorder());
console.log('postorder: ', myTree.postorder());
console.log('-------------------------------');
myTree.insert(127);
myTree.insert(101);
myTree.insert(121);
myTree.prettyPrint()
console.log('is it balanced? ',myTree.isBalanced());
myTree.rebalance();
console.log('-------------------------------');
myTree.prettyPrint()
console.log('is it balanced? ',myTree.isBalanced());
console.log('levelOrder: ', myTree.levelOrder());
console.log('inorder: ', myTree.inorder());
console.log('preorder: ', myTree.preorder());
console.log('postorder: ', myTree.postorder());