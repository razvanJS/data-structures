// 10-->5-->16-->null
// head     tail

// const linkedList = {
//     head: {
//         value: 10,
//         next: {
//             value: 5,
//             next: {
//                 value: 16,
//                 next: null
//             }
//         }
//     }
// }

class Node{

    constructor(value){
        this.value=value,
        this.next=null
    }
}


class LinkedList {
   
    constructor() {
       this.head=null;
       this.tail=null;
       this.length=0;


        

        
      
    }
    append(value) {
        const newNode=new Node(value)

        if(!this.head){
            this.head=newNode
            this.tail=this.head
            this.length++
            
         


        }
        else{
            this.tail.next=newNode
            this.tail=newNode

            this.length++
            return this

            /*
            {vlaue:30,next:null}
               ||
               head&&Tail

            {value:30,next:{value:10,next:null}}
                              ||
                          tail.next=newNode

             this.head={value:30,next:{value:10,next:null}}       
             this.tail={value:30,next:{value:10,next:null}}  
             this.tail=newNode
                {value:30,next:{value:10,next:null}}
                   ||              || 
                  head             tail
             this.tail={value:10,next:null}}
             this.head={value:30,next:{value:10,next:null}}
             this.tail.next={value:5,next:null}=NewNode

             {value:30,next:{value:10,next:{value:5,next:null}}}
                   \\              \\            \\
                   head           tail            newNode 

              this.tail=newNode={value:5,next:null}

              {value:30,next:{value:10,next:{value:5,next:null}}}
                   \\                          ||
                   Head                        Tail






                               
            */

        }
 

        


     

    }

    prepend(value) {
        const newNode = new Node(value);
        // const head = { ...this.head }
        // this.head = { value: newNode.value, next: head }

        newNode.next=this.head
        this.head=newNode
        this.length++


       /*
           newNode={value:-1,next:null}
           newNode.next= {value:30,next:{value:10,next:{value:5,next:null}}}

         {value:-1,next:{value:30,next:{value:10,next:{value:5,next:null}}}}   
            ||                 ||
           newNode            head=newNode.next
           
          newNode=this.head

       {value:-1,next:{value:30,next:{value:10,next:{value:5,next:null}}}}   
              ||  
             this.head

         newNode={value:-10,next:null} 
      {value:-10,next:{value:-1,next:{value:30,next:{value:10,next:{value:5,next:null}}}}} 
                 ||
                 HEAD
  

       */

   
    }

    printList() {
        let currentNode=this.head;
        const printList=[]
        /*
        [30,10,5,7,3]
        currentNode={currentNode.next}


        */

        while(currentNode!==null){
            printList.push(currentNode.value)
            currentNode=currentNode.next
        }
        return printList
    }
    foundLeader(index) {
        console.log(this)
        //index=3
         
        const leaderIndex=index-1//2
        let currentNode=this.head
        
        for(let i=0;i<leaderIndex;i++){
            /*
            currentNode=head
            i=0

            currentNode={value:-10,next:{value:-1,next:{value:30,next:{value:10,next:{value:5,next:null}}}}}
            currentNode={value:-1,next:{value:30,next:{value:10,next:{value:5,next:null}}}}}

            i=1
            currentNode={value:30,next:{value:10,next:{value:5,next:null}

            i=2
            currentNode={value:10,next:{value:5,next:null}


            */
            currentNode=currentNode.next
            
        }


       
     

        return currentNode

    }

    foundNext(index) {
        let counter = 0;
        let currentNode = this.head;
        const nextIndex = index + 1
        while (counter !== nextIndex) {
            currentNode = currentNode.next
            counter++
        }
        return currentNode
    }

    insert(index, item) {

        
           if(typeof index!=='number')return;
            
            if(index>this.length-1){
                this.append(item)
                
            }
            else if(index<=0){
             
                this.prepend(item)
               
            }
            else{
                const newNode = new Node(item)
                const leader = this.foundLeader(index)
                const printList=this.printList()

                const holdPointer=leader.next
                // {value:15,next:{Node}}
                leader.next=newNode
                newNode.next=holdPointer
                this.length++

                return this
            }
          



        }





    
    remove(index) {
        if (typeof index !== 'number') return;
        if(index===0){
            this.head=this.head.next;
            this.length--

        }

        else{
            const leaDerNode=this.foundLeader(index);
            const toDeleteNode=leaDerNode.next
            leaDerNode.next=toDeleteNode.next
            this.length--


        }
       return this



        /*
        this.head={value:0,next:{value:1,next{value:2,next:null}}}
                       ||     ||          \\
                 LeaderNode  ToDeleteNode  ToDeleteNode.next
                            ||            ||
                  leaDerNode.next=========ToDeleteNode.next

                       */



    }
   
    lookup(index){
        let currentNode=this.head;
        let counter=0

        while(counter!==index){
          
            currentNode=currentNode.next  
            counter++
      
        }
        return currentNode

    }
}


const myLinkedList = new LinkedList()
myLinkedList.append(30)
myLinkedList.append(10)
myLinkedList.append(5)
myLinkedList.append(15)
myLinkedList.append(25)
myLinkedList.append(35)

myLinkedList.append(435)
myLinkedList.append('Razvan')
myLinkedList.insert(7,'Oprea')


console.log(myLinkedList)









