# binary-search-tree

Binary search tree implemented with Javascript

Methods: 
* `buildTree()` - function which takes an array of data and turns it into a balanced binary tree full of Node objects appropriately placed
* `insert(value)` - inserts a new node with the given value into the tree
* `deleteNode(value)` - deletes the node holding the given value from the tree
* `find(value)` - accepts a value and returns the node with the given value
* `levelOrder()` -  function which accepts another function as a parameter. traverses each node of the tree in level order
* `inorder()` -  function which accepts another function as a parameter. traverses each node of the tree inorder
* `preorder()` -  function which accepts another function as a parameter. traverses each node of the tree preorder
* `postorder()` -  function which accepts another function as a parameter. traverses each node of the tree postorder
* `height()` - returns the height of a node -- defined as the longest path between the node and a leaf node
* `depth()` -  accepts a node and returns its depth. -- defined as the distance between the node and the root
* `isBalanced()` -  function which checks if the tree is balanced. A balanced tree is one where the difference between heights of left subtree and right subtree of every node is not more than 1.
* `rebalance()` - function which rebalances an unbalanced tree.
* `prettyPrint()` - function that will console.log your tree in a structured format.

To test code:
Run `node script.js` in the terminal
