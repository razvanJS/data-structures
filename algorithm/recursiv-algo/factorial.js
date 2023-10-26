// Write two functions that finds the factorial of any number. One should use recursive, the other should just use a for loop


//5!=5*4*3*2*1
function factorial(number) {
  
    //answer=5
    if(number===0||number===1)return 1
    
    //5*factorial(4)
    

    return number*factorial(number-1)
  



    
  }
  
  function findFactorialIterative(number) {
      // if number===1 we will return 1
      if(number===1||number===0) return 1
     
      //else I make a for loop when counter start at i=2;the condition i<=number and 
      //I will increment the  value if the condition is true

      // let answer=1;
      // for(let i=2;i<=number;i++){
      //   //answer=1*2
      //   //answer=2*3
      //   //answer=6*4
      //   //answer=24*5
      //   //answer=120
      //   answer*=i

      // }
      // //I Return the answer variabile
      // return answer
     
      let answer=number//number-1

      for(let i=number-1;i>=2;i--){
       
        answer*=i
        //5*4=20
        //20*3=60
        //60*2=120

      }       
      return answer



    }
  
  
  
    
  

console.log(factorial(5),findFactorialIterative(5))
  