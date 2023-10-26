
class Node {
    constructor(value) {
        return { value: value, next: null }


    }
}

class Stack {
    constructor() {
        this.top = null
        this.bootom = null
        this.length = 0

    }
    peek() {
        return this.top

    }
    push(value) {
        const newNode = new Node(value);
        //this.top===null
        if (!this.top) {
            this.top = newNode
            this.bootom = newNode
            this.length++
            return this
        }

        //this.top!==null
        else {
            const pointNode = this.top;
            this.top = newNode
            this.top.next = pointNode;
            this.length++
            return this




        }



    }
    pop() {
        if (!this.top) {
            return null
        }
        const holdTopItem = this.top
        console.log(holdTopItem)
        this.top = this.top.next;
        this.length--;
        if (this.top === null) {
            this.bootom = null
        }
        return this


    }
}

const myStack = new Stack()
myStack.push('Google')//Bootom
myStack.push('Facebook')
myStack.push('Instagram')
myStack.push('Youtube')//top
myStack.pop()




console.log(myStack)

