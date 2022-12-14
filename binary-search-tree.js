const Node = (value) => {
    const left = null;
    const right = null;

    return { value, left, right }
}

const Tree = (array) => {
    const sortedArr = [...new Set(array)].sort((a,b) => a-b);
    let root = buildTree(sortedArr, 0, sortedArr.length-1);

    function buildTree(sortedArr, start, end){
        if(start > end) return null;

        const mid = parseInt((start+end) / 2);
        const node = Node(sortedArr[mid]);

        node.left = buildTree(sortedArr, start, mid - 1);
        node.right = buildTree(sortedArr, mid + 1, end);

        return node;
    }

    const insert = (value) => {
        root = insertRec(root, value);
    }

    const insertRec = (root, value) => {
        if(root === null){
            root = Node(value);
            return root;
        }

        if(value < root.value) root.left = insertRec(root.left, value);
        else if(value > root.value) root.right = insertRec(root.right, value);

        return root;
    }

    const deleteNode = (value) =>  {
        root = deleteRec(root, value);
    };

    const deleteRec = (root, value) => {
        if(root === null) return root;

        if(value < root.value) root.left = deleteRec(root.left, value);
        else if (value > root.value) root.right = deleteRec(root.right, value);
        else{
            if(root.left === null) return root.right;
            else if(root.right === null) return root.left;

            root.value = minValue(root.right);
            root.right = deleteRec(root.right, root.value);
        }

        return root;
    }

    function minValue(root){
        let minv = root.value;
        while(root.left != null){
            minv = root.left.value;
            root.left;
        }
        return minv;
    }

    const find = (value) => {
        if(root === null || root.value === value) return root;

        if(value < root.value){
            root = root.left;
            return find(value);
        } 
        root = root.right;
        return find(value);

    }

    const levelOrder = (callBackFn) => {
        let levelOrderArray = [];
        let queue = [root];

        while(queue.length !== 0){
            let currentNode = queue[0];
            callBackFn ? callBackFn(currentNode) : levelOrderArray.push(currentNode.value);

            if(currentNode.left !== null) queue.push(currentNode.left);
            if(currentNode.right !== null) queue.push(currentNode.right);
            
            queue.shift();
        }

        if(levelOrderArray.length > 0) return levelOrderArray;
    }

    const inorder = (callBackFn, currentNode = root, inorderArray = []) => {
        if(currentNode === null) return;

        inorder(callBackFn, currentNode.left, inorderArray);

        callBackFn ? callBackFn(currentNode) : inorderArray.push(currentNode.value)

        inorder(callBackFn, currentNode.right, inorderArray);

        if(inorderArray.length > 0) return inorderArray;
    }

    const preorder = (callBackFn, currentNode = root, preorderArray = []) => {
        if(currentNode === null) return;

        callBackFn ? callBackFn(currentNode) : preorderArray.push(currentNode.value)

        preorder(callBackFn, currentNode.left, preorderArray);
        preorder(callBackFn, currentNode.right, preorderArray);

        if(preorderArray.length > 0) return preorderArray;
    }

    const postorder = (callBackFn, currentNode = root, postorderArray = []) => {
        if(currentNode === null) return;

        postorder(callBackFn, currentNode.left, postorderArray);
        postorder(callBackFn, currentNode.right, postorderArray);

        callBackFn ? callBackFn(currentNode) : postorderArray.push(currentNode.value)

        if(postorderArray.length > 0) return postorderArray;
    }
    
    const height = (node = root) => {
        if(node === null) return node;

        const leftHeight = height(node.left);
        const rightHeight = height(node.right);

        return  Math.max(leftHeight, rightHeight) + 1;
    };

    const depth = (value, node = root, count = 0) => {
        if(node === null) return node;
        if(value === node.value) return count;

        if(value < node.value){
            return depth(value, node.left, count + 1);
        } else {
            return depth(value, node.right, count + 1);
        }
    };

    const isBalanced = () => {
        if(root === null) return root;

        return Math.abs(height(root.left) - height(root.right)) <= 1 ? true : false;
    };

    const rebalance = () => {
        const balancedArray = inorder();
        root = buildTree(balancedArray, 0, balancedArray.length-1);
    };

    // log tree in a structured format
    const prettyPrint = (node = root, prefix = '', isLeft = true) => {
        if (node.right !== null) {
            prettyPrint(node.right, `${prefix}${isLeft ? '???   ' : '    '}`, false);
        }
        console.log(`${prefix}${isLeft ? '????????? ' : '????????? '}${node.value}`);
        if (node.left !== null) {
            prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '???   '}`, true);
        }
    }

    return { insert, deleteNode, find, levelOrder, inorder, preorder, postorder, height, depth, isBalanced, rebalance, prettyPrint };
}

module.exports = Tree;