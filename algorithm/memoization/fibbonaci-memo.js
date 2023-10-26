
//0,1,1,2,3,5,8,13,21

// function fibonacci(n){
//     calculations++


//     if(n<2){
//         return n
//     }
//     return fibonacci(n-1)+fibonacci(n-2)
//     //O(2^n)
// }

// console.log(fibonacci(45),calculations)


//0,1,1,2,3,5,8,13,21
// let calculations;
// function fibonacciMaster2(n){
//     const cache=[0,1]
//       calculations=0
//       if(n<2)return n

//     for(let i=2;i<=n;i++){
//         calculations++
//         cache.push(cache[i-1]+cache[i-2])
//     }
//     console.log(cache)
//     return cache[n-1]
// //O(n)
// }

// console.log(fibonacciMaster2(100),  calculations)

function fibonacciMaster3(){

  const cache=[0,1]
  
  return function fib(n){
   if(n in cache){
       return cache[n]
   }
   else {
    if(n<2)return n
    else {
        cache[n]=fib(n-2)+fib(n-1)
        return cache[n]
    }
   }
  }

}

const fibonacci=fibonacciMaster3()
console.log(fibonacci(5))