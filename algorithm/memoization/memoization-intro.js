"use strict"

// const addTo80=function(n){
//     // console.log('long Time')
//     return n+80
// }

// // const add5=addTo80(5)
// // const add5again=addTo80(5)
// // console.log(add5,add5again)

// // const obj={}
// function memoAddTo80(n){
//     if(n in obj){
//         return obj[n]
//     }
//     else{
//         console.log('LONG TIME')
//         obj[n]=n+80
//         return obj[n]
//     }
// }

// console.log(`1 ${memoAddTo80(6)}`,`2 ${memoAddTo80(6)}`)


function memoAddTo80(){
    const cache={}
    return function(n){

    
    if(n in cache){
        return cache[n]
    }
    else{
        console.log('long time')
        cache[n]=n+80
        return cache[n]
    }
}
}
const addTo80=memoAddTo80()

 console.log(`1 ${addTo80(5)}`,`2 ${addTo80(5)}`)