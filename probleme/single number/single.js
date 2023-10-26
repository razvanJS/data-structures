// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

// You must implement a solution with a linear runtime complexity and use only constant extra space.

 

// Example 1:

// Input: nums = [2,2,1]
// Output: 1
// Example 2:

// Input: nums = [4,1,2,1,2]
// Output: 4
// Example 3:

// Input: nums = [1]
// Output: 1
 

/*
[2,2,1]
//Se presupune ca fiecare sir de elemete poate avea un elemet care apare doar de doua ori sau poate aparea mai mult de doua ori?

{
    '2':2
    '1':1
    

}
[2=>{2:1}]
[2=>{2:2}]
[1=>{1:1}]


[arrayInput[arrayInput[n]]]

*/

//1 Creem o functie care ia ca input un array

// const singleNumber=function(array){

//     //2 ciclam fiecare element din array
//     const obj={}
//     for(let i=0;i<array.length;i++){
//         //0(n)
//       //3 creem un obiect iar in obiect introducem pentru fiecare element=>propietate iar ca valaore adaugam numarul de
//       //de aparati
//       let counter=1
   
//     if( !obj[array[i]]){
//         obj[array[i]]=1
        
        


//     }
//     else{
//         obj[array[i]]++
       
        
//     }
//     //3 luam propietaea keie si o returnam daca valoarea ei este egala cu unu

   

//     }

//     const entries=Object.entries(obj)
//     for(const [key,value] of entries){
      
//         if(value===1){
//             return +key
//         }

//     }
   


    
   
   
// }
// //0(n)
// //0(n)

// console.log(singleNumber([3,3,5]))
// console.log(singleNumber([4,1,2,1,2]))
// console.log(singleNumber([4,1,2,1,2]))


const singleNumber2=(array)=>{
let result=0

for(let i=0;i<array.length;i++){

        result ^=array[i]
    
}
console.log(result)
return result

}


const singleNumber3=(array)=>{

    
    //1 calculam suma numerelor din sir 
    const sumArray=array.reduce((acc,value)=>acc+value,0)
    //2 calculam suma numerelor din sir fara dubluri
    const sumSet=[...new Set(array)].reduce((acc,value)=>acc+value,0)
  

    const result = 2 * sumSet- sumArray;
   
    console.log(result)
    
    
    }
    console.log(singleNumber3([1,7,7]))

    /*

    tema de casa rezolvarea problemei folosind Set()

    */