const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4];

function mergeSort (array) {
    if (array.length === 1) {
        
        return array
      }
  // Split Array in into right and left
  const length = array.length;
  const middle = Math.floor(length / 2)
  const left = array.slice(0, middle) 
  const right = array.slice(middle)
 
  /*
  [99, 44, 6, 2, 1, 5, 63, 87, 283, 4]
  [99,44,6,2,1]                 [5,63,87,283,4]
    \\                               \\
    left                             right

  [99,44]      [6,2,1]            [5,63]    [87,283,4]             
    \\           \\                 \\          //
   left          right              left       rigth

 [99][44]        [6] [2,1]        [5][63]    [87][283,4] 
  \\  //         \\  //            \\ //      \\   //
   L  R           L  R              L R        L   R
                 [2] [1]                      [283][4] 
                  \\ //                        \\   //
                   L R                          L   R
    
  */


      return merge(
             mergeSort(left),
              mergeSort(right)
                  )

}

function merge(left,right){
    const result = [];
    let leftIndex = 0;
    let rightIndex = 0;
//   [99,44,6,2,1]                 [5,63,87,283,4]
  while(leftIndex < left.length && 
    rightIndex < right.length){
    //0<5                            0<5
    if(left[leftIndex] < right[rightIndex]){
        // [99]<[5] false
        //[99]<[63]false
        //[99]<[87]false
        //[99]<[283]true
        //[44]<[283]true
        //[6]<[283]true
        result.push(left[leftIndex]);
        leftIndex++;
        //[5,63,87,99,44,6,2,1,4]
        //Rightindex=3
        //LeftIndex=4
    }
else{
      //5<99 true
      //63<99 true
      //87<99 true
      result.push(right[rightIndex]);
      rightIndex++
       //[5,63,87]
       //Rightindex=3

}


}
return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));

}
   
const answer = mergeSort(numbers);
console.log(answer);