
class Stack {
    constructor() {
        this.array = new Array()
        this.length = 0

    }
    peek() {
        return this.array[this.array.length - 1]

    }
    push(value) {
        this.array.push(value)
        this.length++
        return this.array

    }
    pop() {
        this.array.pop()
        this.length--
        return this.array
    }




}

const myStack = new Stack()
myStack.push('Andrei')
myStack.push('Bogdan')
myStack.push('Razvan')
myStack.push('Vosy')
myStack.pop()

console.log(myStack)
console.log(myStack.peek())