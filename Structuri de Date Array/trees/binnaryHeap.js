
class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class BinaryHeap {
    constructor(value) {
        this.root = { value: value, next: null }
        this.currentNode = this.root
    }
    insert(value) {
        const newNode = new Node(value)

        if (value > this.root.value) {
            newNode.next = this.root
            this.root = newNode
            this.currentNode = newNode


        }
        else {
            let currentNode = this.root
            while (currentNode.next !== null && value < currentNode.next.value) {
                currentNode = currentNode.next
            }
            newNode.next = currentNode.next
            currentNode.next = newNode
            this.currentNode = newNode

        }


    }

}
const myBinaryHeap = new BinaryHeap(100)
myBinaryHeap.insert(600)
myBinaryHeap.insert(30)
myBinaryHeap.insert(20)
myBinaryHeap.insert(100)
myBinaryHeap.insert(500)
myBinaryHeap.insert(50)
myBinaryHeap.insert(5)
myBinaryHeap.insert(60)

console.log(myBinaryHeap)
