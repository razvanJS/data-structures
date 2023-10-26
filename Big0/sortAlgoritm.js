const arr=[100,2,600,5,3,10,16,4993,1]

// const sortAlgoritm=function(array){
//     for(let i=0;i<array.length;i++){
//         for(let j=0;j<array.length;j++){
//            let a=array[i]
//            let b=array[j]
//            if(a<b){
//             array[i]=b
//             array[j]=a
            
//            }
//         }

//     }
//     return array
//     }

// const sort=sortAlgoritm(arr)
// console.log(sort)

arr.sort((a,b)=>a-b)
console.log(arr)
