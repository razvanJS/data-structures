class Node {
    constructor(value) {
        return { value: value, next: null, prev: null }
    }
}

class CreateADulbleLinkedList {
    constructor(value) {
        this.head = { value: value, next: null, prev: null };
        this.tail = this.head;
        this.length = 1

    }
    append(value) {
        const newNode = new Node(value)

        /* 
           tail={value:15,next:null,prev:null}
           newNode={value:6,next:null,prev:{tail}}
           tail.next={value:15,next:{newNode},prev:null}
           tail={value:15,next:{newNode},prev:null}

           (15)=>(6)=>(10)
            ||    ||   ||
            tail  Tail Tail  
          

        */
         newNode.prev=this.tail
        this.tail.next=newNode;
        this.tail=newNode
        this.length++
        return this



    }

    prepend(value) {
        const newNode = new Node(value);
        /*
        newNode={value:-10,next:null,prev:null}

        head.prev={value:10,next:{..},prev:{newNode}}
        

        newNode.next=head={value:-10,next:{value :10 head with prev:{newNode}},prev:null}
        
        head=newNode={value:-10,next:{value:10 head with prev:{newNode}},prev:null}

        
        


       




        */
            
       
        this.head.prev=newNode
        newNode.next=this.head
        this.head=newNode

        this.length++
        return this


    }
    findLeader(index) {
        const leaderIndex=index-1
        let currentNode=this.head
        let counter=0
        while(counter!==leaderIndex){
            currentNode=currentNode.next

            counter++
        }

      return currentNode
    }
    insert(index, value) {
        if (index >= this.length) return this.append(value)
        if (index === 0) return this.prepend(value)
        const newNode = new Node(value);

        const leader=this.findLeader(index)
        const follower=leader.next;
        
        leader.next=newNode;
        newNode.prev=leader
        newNode.next=follower
        follower.prev=newNode
        this.length++

         



        
        return this
    }
    remove(index) {
        if (index === 0) {
            const nextNode = this.head.next;

            nextNode.prev = null

            this.head = nextNode
            this.length--
            return this.head

        }


    const leaderNode=this.findLeader(2)
    const toDeleteNode=leaderNode.next     
    const afterDeleteNode=toDeleteNode.next
   
    leaderNode.next=afterDeleteNode
    afterDeleteNode.prev=leaderNode
//    console.log(leaderNode,toDeleteNode,afterdeleteNode)


        this.length--

        return this

    }


lookup(index){
   return this.findLeader(index+1)

}
}

const myDulbleLinkedList = new CreateADulbleLinkedList(10)

myDulbleLinkedList.append(6)
//666
myDulbleLinkedList.append(100)
myDulbleLinkedList.append(-10)

myDulbleLinkedList.lookup(2)

console.log(myDulbleLinkedList.lookup(0))