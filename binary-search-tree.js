const Node = (data) => {
    const left = null;
    const right = null;

    return { data, left, right }
}

const Tree = (array) => {
    let root = null;

    const buildTree = (array, start, end) => {
        if(start > end) return null;

        array.sort((a, b)=>{
            if(a > b) return 1;
            if(a < b) return -1;
            return 0;
        })

        const mid = parseInt((start+end) / 2);
        const node = Node(array[mid]);

        node.left = buildTree(array, start, mid - 1);
        node.right = buildTree(array, mid + 1, end);

        return node;
    }

    const insert = (value) => {
        
    }

    return { buildTree };
}

// log tree in a structured format
const prettyPrint = (node, prefix = '', isLeft = true) => {
    if (node.right !== null) {
        prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
    }
    console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);
    if (node.left !== null) {
        prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
    }
}

let sampleArray = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];

// remove duplicates
sampleArray = [...new Set(sampleArray)];

const myTree = Tree();
const myBuiltTree = myTree.buildTree(sampleArray, 0, (sampleArray.length-1));

prettyPrint(myBuiltTree);