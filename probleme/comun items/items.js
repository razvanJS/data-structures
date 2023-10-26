// // Given 2 arrays, create a function that let's a user know (true/false)
// // whether these two arrays contain any common items
// //For Example:
// //const array1 = ['a', 'b', 'c', 'x'];//const array2 = ['z', 'y', 'i'];
// //should return false.
// //-----------
// //const array1 = ['a', 'b', 'c', 'x'];//const array2 = ['z', 'y', 'x'];
// //should return true.

// // 2 parameters - arrays - no size limit
// // return true or false

// //input
// const array1 = ['a', 'b', 'c', 'x']
// const array2 = ['a']

// //output
// //true||false

// // a===z 
// // b===z
// // c===z
// // x===z
// // return false

// // c===c
// // return true

// //1 create a function with two parametrs
// function commonItems (arr1,arr2){
//     for(let i=0;i<arr1.length;i++){
//         for(let j=0;j<arr2.length;j++){
//             //2 create array1 and array2 pairs
//             // console.log(arr1[i],arr2[j])
//             //3 compare all the elements pairs
//             if(arr1[i]===array2[j])return true

//         }
//     }
//     return false

// }
// //o(a*b)
// //0(1)


// //2
// const commonItems2=function(arr1,arr2){
//   //1Use one array with all the array elements  
//  const arr=[...arr1,...arr2]
//  console.log(arr)

 
//  //2 creem un array fara duplicate

//  //0(n)
//  const arrayNoDub=arr.filter((a,i)=>arr.indexOf(a)===i)
//  console.log(arrayNoDub)


//  //3 comparam lugimea dintre primu aray si al doilea array

//  if(arr.length!==arrayNoDub.length){
//     return true
//  }
//  else{
//     return false
//  } 

// }

// //0(n)
// //0(n)

// console.log(commonItems2(array1,array2))

// //3

// //1 creem un obiect obj={}
// //2 obj[arry[1]]=obj.a=true

const commonItems3=function(arr1,arr2){
    if(!arr1||!arr2)return alert('One input its emty');
   else if(typeof arr1 !=='object'&&typeof arr2!=='object') return alert('Input its not an Object') ; 
   
    //1 creem un obiect obj={}
    const obj={}
    

   /*
   obj[arr1[i]]=false
   onj[a]=true
   onj[b]=false
   obj[c]=false
   obj[x]=false
   */

   for(let i=0;i<arr1.length;i++){
    //2 ciclam elementele din primu array fiecarui element ii dam ca valoare:false
    if(!obj[arr1[i]])obj[arr1[i]]=true
     

   }

   for(let j=0;j<arr2.length;j++){

    //3 ciclam elementele din al doilea array 
    //-daca elementul deja exsita valoare propiatati elemtului va fi true

    if(obj[arr2[j]]){
        
        obj[arr2[j]]=false
        return true
     
    }
    else{
        obj[array2[j]]=true
       
    }
 
   
   
   
   
        



   }
   //daca nu exsita deja elemetul in array 2 atunci valoare returnata va fi tot timpu falsa
   return false

  


}

// //input
const array1 = ['a', null, 'c', 'x','m']
const array2 = ['q',null,'r']

// //output
// //true||false

 console.log(commonItems3(array1))


//0(a+b)
//0(n)
