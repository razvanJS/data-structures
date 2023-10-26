// //Google Question
// //Given an array = [2,5,1,2,3,5,1,2,4]:
// //It should return 2

// //Given an array = [2,1,1,2,3,5,1,2,4]:
// //It should return 1

// //Given an array = [2,3,4,5]:
// //It should return undefined


// function firstRecurringCharacter(input){
//    //1 loop over the input array
//    for(let i=0;i<input.length;i++){
//     for(let j=i+1;j<input.length;j++){
//         //2 loop in loop to find the input pair
        
//         //3 if first  element in the first loop
//         // its equal with second loop element we retrun the value
//         if(input[i]===input[j])return input[i]

//     }
//    }
//    return undefined

    
    
// }
// const reccirngCharacter=firstRecurringCharacter([2,5,1,2,3,5,1,2,4])
// console.log(reccirngCharacter)
// // //(n^2)//

// // console.log(firstRecurringCharacter([2,5,5,2,3,5,1,2,4]))
// // //Bonus... What if we had this:
// // // [2,5,5,2,3,5,1,2,4]
// // // return 5 because the pairs are before 2,2

// const firstRecurringCharacter2=(input)=>{
    
//     const obj={}
//     let reccuringElement;
//     for(let i=0;i<input.length;i++){
     
//         obj[input[i]]=obj[input[i]]?obj[input[i]]+1:1
//         //{2:3}
//          if(obj[input[i]]>1){
//          reccuringElement= input[i]
//          }
        
//     }
//    return reccuringElement
   
  



// }
// const reccirngCharacter2=firstRecurringCharacter2([2,1,1,2,3,5,1,2,4])
// console.log(reccirngCharacter2)





// //Google Question
// //Given an array = [2,5,1,2,3,5,1,2,4]:
// //It should return 2

// //Given an array = [2,1,1,2,3,5,1,2,4]:
// //It should return 1

// //Given an array = [2,3,4,5]:
// //It should return undefined
const firstRecurringCharacter=function(input){
    // create an object
    const map={} 
   

    // loop over the input array
    for(let i=0;i<input.length;i++){
    
        
        //{} {2:0} {1:0} 
        //If the key doesn't exist, we add it to the object with a not important value
         if(!map[input[i]]) map[input[i]]=1
         //If the key exist allready in the object we return the input value which exist
        //{1:0}->exist return 1 
        else return input[i]
}
    //return undefined if there is no repeated element
    return undefined

    //time-> O(n)
     //space-> O(n)
}
console.log(firstRecurringCharacter([2,3,4,5]))
