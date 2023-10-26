const arr=[4,2,3,1,0]

function selectionSort(array) {
  

    for(let i=0;i<array.length;i++){
        let min=i//0,1,2,3,4
        const temp=array[i]

        
        for(let j=i+1;j<array.length;j++){
            if(array[j]<array[min]){
                min=j
                 //2<4
                 //0->1
                //3<2 false
                //1<2 //1->3
                //0<2 //3->4
            }
              
               


            
        }
        array[i]=array[min]
        array[min]=temp
        
        //array[0]=array[4]=0//[0,2,3,1,0]
        //0
        //array[1]=array[3] //[0,1,3,1,4]
        //array[2]=array[3] //[0,1,2,1,4]
        
         //array[4]=array[0]=4 [0,2,3,1,4]
         //array[3]=array[1]=2  [0,1,3,2,4]
         //array[3]=array[2]=3  [0,1,2,3,4]
       
    
        
    }
    console.log(array)        
    return array
  }

  
selectionSort(arr)