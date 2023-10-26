//we have the elements 10,30,40,-4,1,2  implement a function  to find the minim value 
//of these elements GOOD luCk

const numbers=[10,-5,30,40,0,1,2]

const findMin=function(input){
    let min=input[0]//the default min value its the first value of the input
    //10
    //loop over the input array and try to find min value
    for(let i=0;i<input.length;i++){
      
        if(input[i]<min){
            if(input[i]===min)continue;
              min=input[i]

        //Condition if min value ,by default its 10 its bigger than de input number
        // min becomes the min element
        //10>-4 
        //min=-4
      
           
        }
   }
   
  return min
}

const min=findMin(numbers)
console.log(min)
//0(n)


const findMin2=input=>input.reduce((acc,value)=>acc<value?acc:value,input[0])
console.log(findMin2(numbers))