// Write a function that reverses a string. The input string is given as an array of characters s.

// You must do this by modifying the input array in-place with O(1) extra memory.

// Example 1:

// Input: s = ["h","e","l","l","o"]
// Output: ["o","l","l","e","h"]
// Example 2:

// Input: s = ["H","a","n","n","a","h"]
// Output: ["h","a","n","n","a","H"]

// const s=["H","a","n","n","a","h"]


// const reverseString=function(s){
   
//     const newArr=[]
//     for(let i=s.length-1;i>=0;i--){
//         newArr.push(s[i])

//     }
//     return newArr
// }
// const reverse=reverseString(["h","e","l","l","o"])
// console.log(reverse)


//Se da un stirng 'oprea razvan' inversati stringul


// const reverseString2=function(str){
//     const strToArr=str.split('')
//     const reverse=[]
    
//    for(let i=strToArr.length-1;i>=0;i--){
//      reverse.push(strToArr[i])
//    }
//    const reverseStr=reverse.join('')
//    console.log(reverseStr)
//    return reverseStr
   

// }
const reverseString3=function(str){
   
    const reverse=[]
   for(let i=str.length-1;i>=0;i--){
     
       reverse.push(str[i])

   }
   return reverse.join('')
 
   

}

const reverse3= reverseString3('Oprea Razvan')
console.log(reverse3)


const reverseString4=(str)=>str.split('').reverse().join('')
console.log(reverseString4('Oprea Razvan'))
   
   
