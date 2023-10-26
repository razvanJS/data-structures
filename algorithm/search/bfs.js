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
    breadthFirstSearch(){

    


  //Code Here
    let currentNode=this.root;
    /*
      9
   4     20
 1  6  15  170
 [9,4,20,1,6,15,170]

 */

    const queue=[];
    const list=[];
    queue.push(currentNode)
    //CurrentNode [Node 9]
    //queue [9]
    while(queue.length>0){
     currentNode=queue.shift()
     //queue=[9Node]
     //queue=[[4Node,20Node]]
     //queue=[20Node,1Node,6Node]
     //queue=[1Node,6Node,15Node,170Node]
     //queue=[6Node,15Node,170Node]
     //queue=[15Node,170Node]
     //queue=[170Node]

     //currentNode=[9Node]
     //currentNode=[4Node]
     //currentNode=[20Node]
     //currentNode=[1Node]
     //currentNode=[6Node]
     //currentNode=[15Node]
     //currentNode=[170Node]

     //queue=[]
     //queue=[20Node]
     //queue=[1Node,6Node]
     //queue=[6Node,15Node,170Node]
     //queue=[15Node,170Node]
     //queue=[170Node]
     //queue=[]
     list.push(currentNode.value)//List=[9,4,20,1,6,15,170]
     if(currentNode.left){
        //[4Node]
        //[1node]
        //[15Node]
        queue.push(currentNode.left)
        //[4Node]
        //[20Node,1Node]
        //[1Node,6Node,15Node]
     }
     if(currentNode.right){
        //[20Node]
        //[4Node]
        //[170Node]
        queue.push(currentNode.right)
        //[4Node,20Node]
        //[20Node,1Node,6Node]
        //[1Node,6Node,15Node,170Node]
     }



    }
    return list
        

        }

          
dfsInOrder(){
    return this.traverseInOrder(this.root,[])


}
dfsPostOrder(){
    return this.travesePostOrder(this.root,[])
}
dfsPreOrder(){
    return this.travesePreOrder(this.root,[])
}
traverseInOrder(node,list){
     /*
      9
   4     20
 1  6  15  170
 [1,4,6,9,15,20,170]

 */

    if(node.left){
        this.traverseInOrder(node.left,list)
    }
    list.push(node.value)
    if(node.right){
        this.traverseInOrder(node.right,list)
    }
    return list


}
travesePostOrder(node,list){
       /*
      9
   4     20
 1  6  15  170
 [1,6,4,15,170,20,9]

 */
if(node.left){
    this.travesePostOrder(node.left,list)
   

   
  
}
if(node.right){
    this.travesePostOrder(node.right,list)

   
}
list.push(node.value)
return list
}
      
    
    
travesePreOrder(node,list){
        /*
      9
   4     20
 1  6  15  170
 [9,4,1,6,15,20,170]

 */
//[9]
list.push(node.value)
 if(node.left){
    this.travesePreOrder(node.left,list)
   // this.travesePostOrder(4)
   //this.travesePostOrder(1)
 // this.travesePostOrder(15)
//    [9,4,1,6,15,20,170]

   
  
}
if(node.right){
    this.travesePreOrder(node.right,list)
       // this.travesePostOrder(6)
       //   this.travesePostOrder(20)
     //  this.travesePostOrder(170)


   
}
return list
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
tree.breadthFirstSearch()


console.log(tree.dfsInOrder())
console.log(tree.dfsPostOrder())
console.log(tree.dfsPreOrder())
