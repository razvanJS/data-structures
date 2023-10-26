
// Given a number N return the index value of the Fibonacci sequence, where the sequence is:

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ...
// the pattern of the sequence is that each value is the sum of the 2 previous values, that means that for N=5 → 2+3

//For example: fibonacciRecursive(6) should return 8

function fibonacciIterative(n){
    //code here;
    
    const fibonacci=[0,1]
    if(n<2)return n 
    else{
        for(let i=0;i<n-1;i++){
             fibonacci.push(fibonacci[i]+fibonacci[i+1])
             //o(n)=>Time
             //o(n)=>Space
       }
      
       return fibonacci[n]

    }


    

     




  }
const fibonacciIntercative1=fibonacciIterative(3);

function fibonacciRecursive(n) {
    //code here;
    if(n<2) return n
    
    
    return fibonacciRecursive(n-1)+fibonacciRecursive(n-2)
}

const fibonacciRecursive2= fibonacciRecursive(4)
console.log(fibonacciIntercative1)
 console.log(fibonacciRecursive2)


