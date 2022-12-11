const Node = (data) => {
    const left = null;
    const right = null;

    return { data, left, right }
}

const Tree = (array) => {
    let root = null;

    const buildTree = (array, start, end) => {
        if(start > end) return null;

        const mid = parseInt((start+end) / 2);
        const root = Node(array[mid]);

        root.left = buildTree(array, start, mid - 1);
        root.right = buildTree(array, mid + 1, end);

        return root;
    }

    return { buildTree };
}

const sampleArray = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];
const myTree = Tree();
const myBuiltTree = myTree.buildTree(sampleArray, 0, (sampleArray.length-1));

const prettyPrint = (node, prefix = '', isLeft = true) => {
    if (node.right !== null) {
        prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
    }
    console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);
    if (node.left !== null) {
        prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
    }
}

prettyPrint(myBuiltTree)