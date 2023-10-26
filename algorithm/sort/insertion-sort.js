const numbers = [7,5,3,0,2,1,4,6];

function insertionSort(array) {
  const length = array.length;
	for (let i = 0; i < length; i++) {
		if (array[i] < array[0]) {
      //Move the element to the first position
          if(array[i]===array[0])continue;
          //arrray[i]=7
          //array[0]=7
          const temp=array[i]
          //array.splice(i,1)//i=44/(1,1)cut
          array.unshift(...array.splice(i,1))
          /*
           7<7 false
           5<7 ture

          [5,7,3,0,2,1,4,6]

          3<5 ture
          [3,5,7,0,2,1,4,6]

          0<3 true
          [0,3,5,7,2,1,4,6]
           
          2<0 false
          1<0 false
          4<0 false
          6<0 false

          */
          
        
       }
       
       else{
         
         /*
         // [0,3,5,7,2,1,4,6] 
      
         0<UNDEIFINED NU
         3<0->NU
         ARRAY[I]=0
         ARRAY[I-1]=UNDEFINED


        ARRAY[I]=3
         ARRAY[I-1]=0
         3<0->NU

         ARRAY[I]=5
         ARRAY[I-1]=3
         5<3->NU

          ARRAY[I]=7
         ARRAY[I-1]=5
         7<5->NU

         ARRAY[I]=2
         ARRAY[I-1]=7
         2<7->DA


         
         ARRAY[I]=2
         ARRAY[I-1]=7
         2<7->DA

         [0,2,3,5,7,1,4,6] 
        1<7->DA
        [0,1,2,3,5,7,4,6] 
        4<7->DA

        [0,1,2,3,4,5,7,6] 
        6<7->DA
         */
         
                
      if(array[i]<array[i-1]){
    
    for(let j=1;j<length;j++){
      

        if(array[j]>array[i]){
       /*[0,2,3,5,7,1,4,6] 
         [0,1,2,3,5,7,4,6] 
         //5>4
        [0,1,2,3,4,5,7,6] 
        //7>6
        [0,1,2,3,4,5,6,7] 
           */

    
          array.splice(j,0,...array.splice(i,1));
        

      
       }
       }

      
    }
   }
     }
    
      }



// insertionSort(numbers);
// console.log(numbers);


// [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0]

//Only Pozitive numbers

function insertionSort2(array){
  let temp
  for(let i=0; i<array.length-1 ; i++ ){
     temp=array[i]
    
    for(var j=i-1 ;array[j] >=temp && j>-1;j--){
     array[j+1]=array[j]
    }
    array[j+1]=temp

  }
  console.log(array)
return array
}
insertionSort2(numbers)