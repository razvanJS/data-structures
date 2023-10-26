class Node {
    constructor(value) {
        this.left = null;
        this.right = null;
        this.value = value;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    insert(value) {
        const newNode = new Node(value)
        if (!this.root) {
            this.root = newNode
        }
        else if (this.root) {
            let currentNode = this.root;
            while (currentNode) {
                if (value < currentNode.value) {
                    if (currentNode.left !== null) {
                        currentNode = currentNode.left

                    }
                    else {
                        currentNode.left = newNode
                        return this
                    }

                }
                else if (value > currentNode.value) {
                    if (currentNode.right !== null) {
                        currentNode = currentNode.right


                    }
                    else {
                        currentNode.right = newNode
                        return this
                    }
                }
            }
        }
    }
    lookup(value) {
        //Code here
        if (!this.root) return null;

        else {
            let currentNode = this.root
            while (currentNode) {
                if (value < currentNode.value) {
                    currentNode = currentNode.left

                }
                else if (value > currentNode.value) {
                    currentNode = currentNode.right

                }
                else if (value === currentNode.value) {
                    return currentNode
                }
                else return false

            }

        }





    }
  

}

const tree = new BinarySearchTree();
tree.insert(9)
tree.insert(4)
tree.insert(20)
tree.insert(1)
tree.insert(6)
tree.insert(15)
tree.insert(170)
tree.insert(200)


console.log(tree.lookup(20))

//     9
//  4     20
//1  6  15  170





// JSON.stringify(traverse(tree.root))