//we have the data [1,2,3,6,4,7,5,0,-1] witch its the best sort algorithm to sort this data?
//try to implement the algorithm

//[1,2,3,6,4,7,5]

//2>1,3>2,6>3,4<6


const sortElements=function(array){

    return array.sort((a,b)=>a-b)
}
console.log(sortElements([1,2,3,6,4,7,5]))



const sortElements2=()=>array.sort((a,b)=>a-b)

const sortInsertion=function(array){
    //[0,1,2,3,6,4,7,5,0,-1]

    for(let i=0;i<array.length;i++){
    
        if(array[i]<array[0]){
            const deleteElement=array.splice(i,1)
            array.unshift(...deleteElement)
            }

      else if(array[i]<array[i-1]){
          for(let j=1;j<array.length;j++){
            if(array[i]<array[j]){
                array.splice(j,0,...array.splice(i,1))
            }
          }
      }  
    }
 console.log(array)
    return array
}

sortInsertion([1,2,3,6,4,7,5,-1,-2,0,30,-100])




