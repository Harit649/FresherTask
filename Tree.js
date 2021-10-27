class Node{
    constructor(data, left = null, right = null) {
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

class Tree{
    constructor() {
        this.root = null;
        //this.depth = null;
    }
    // add(data) {
    //     const node = this.root;
    //     if(node === null) {
    //         this.root = new Node(data);
    //         return;
    //     }
    //     else{ 
    //         const searchTree = function(node){
    //             if(data < node.data) {
    //                 if(node.left === null) {
    //                     node.left = new Node(data);
    //                     return;
    //                 }
    //                 else if(node.left !== null){
    //                     return searchTree(node.left);
    //                 }
    //             }
    //             else if(data > node.data) {
    //                 if(node.right === null) {
    //                     node.right = new Node(data);
    //                     return node;
    //                 }
    //                 else if(node.right !== null) {
    //                     return searchTree(node.right);
    //                 }
    //                 else{
    //                     return null;
    //                 }
    //             }
    //         }
    //         console.log(node);
    //         return searchTree(node);
    //     }
    // }

    //print a BST based on Depth value...

    // Generate(depth){
    //     //console.log(depth);
    //     if(depth === null) {
    //        this.depth = new Node(data);
    //         return;
    //     }
    //     else
    //     {
    //         let Count = 0;
    //         const x = Math.pow(2,depth) - 1 ;
    //         //console.log(x);

    //         if(Count <= x) {
    //             console.log();
    //             Count++;
    //             let y = Math.floor(Math.random() * 101);
    //            // this.add(y);
    //         }
    //         else
    //         {
    //             return("out of bound");
    //         }
    //     }
    // }

    createNode() {
        var group = [];
        let depth = 3;

        const node = this.root;
        if(node == null) {
            this.root= new Node(data);
        }
        for (let i = 0; i < depth; i++) {
            
        }
    }
} 

const tr = new Tree();

// tr.add(100);
// tr.add(75);
// tr.add(110);

//tr.Generate(3);
