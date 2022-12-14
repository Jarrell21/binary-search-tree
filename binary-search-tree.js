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

    return { insert, deleteNode, find, root };
}
let sampleArray = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];

const myTree = Tree(sampleArray);
myTree.insert(11);
// myTree.deleteNode(11);

// log tree in a structured format
const prettyPrint = (node, prefix = '', isLeft = true) => {
    if (node.right !== null) {
        prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
    }
    console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.value}`);
    if (node.left !== null) {
        prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
    }
}

prettyPrint(myTree.root);
// console.log(myTree.find(1));