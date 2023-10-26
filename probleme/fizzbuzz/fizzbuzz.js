// Given an integer n, return a string array answer (1-indexed) where:

// answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
// answer[i] == "Fizz" if i is divisible by 3.
// answer[i] == "Buzz" if i is divisible by 5.
// answer[i] == i (as a string) if none of the above conditions are true.
 

// Example 1:

// Input: n = 3
// Output: ["1","2","Fizz"]
// Example 2:

// Input: n = 5
// Output: ["1","2","Fizz","4","Buzz"]
// Example 3:

// Input: n = 15
// Output: ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]
 


const  fizzBuzz = function(n) {
    //loop to the input value 
    //input value expected an array
     
     //create an counter 
     let counter=1
     let limit=n
     const nArr=[]
    
      // create a while loop n its the limit
      while(counter<=n){
         nArr.push(counter.toString())
         //while the limit 15 
         //arr will push the counter value nArr=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

        //incremante the counter
        counter++

      }
     

     const fizzBuzzArr=[]
    for(let i=0;i<nArr.length;i++){
           

          if(nArr[i]%3===0&&nArr[i]%5===0){
              //check if nArr[i] its divisible with 3 and 5
           fizzBuzzArr.push('FizzBuzz')   
          
          }
          else if(nArr[i]%3===0){
             //check if nArr[i] its divisible with 3 
            fizzBuzzArr.push('Fizz')

        }
        else if(nArr[i]%5===0){
            //check if nArr[i] its divisible with 5
            fizzBuzzArr.push('Buzz')
        }
        else{
            
            fizzBuzzArr.push(nArr[i])
        }
      
            
        
    }
    console.log(fizzBuzzArr)
    return fizzBuzzArr

    
};
fizzBuzz(5)
//O(N)==>TIme
//O(N)==>Space