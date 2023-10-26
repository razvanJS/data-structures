
class Node {
    constructor(value) {
        return { value: value, next: null }
    }
}

class Queue {
    constructor() {
        this.first = null
        this.last = null
        this.length = 0

    }
    peek() {
        return this.first

    }
    enQueue(value) {
        const newNode = new Node(value)
        if (!this.first) {
            this.first = newNode
            this.last = newNode
            this.length++
            return this

        }
        else {

            this.last.next = newNode
            this.last = newNode
            this.length++
            return this



        }



    }
    deQueue() {
        if (!this.first) {

            return null
        }
        if (this.first === this.last) {
            this.last = null
        }


        const nodePointer = this.first
        this.first = this.first.next;
        this.length--;
        return this



    }

}
const myQueue = new Queue()
myQueue.enQueue('Razvan')
myQueue.enQueue('Bogdan')
myQueue.enQueue('Vasile')
myQueue.deQueue()
myQueue.deQueue()
myQueue.deQueue()
console.log(myQueue)