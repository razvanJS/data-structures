const arr=[30,300,10,-10,60,400,1000]
const arr2=['z','x','a','m','n','q','b']
//sortati urmaotrul array care conttine numere folosind bubble sort algoritm

const sortData=function(input){

for(let i=0;i<input.length;i++){
    for(let j=i+1;j<input.length;j++){
        const a=input[i]
        const b=input[j]
  
        if(input[i]>input[j]){
            input[i]=b
            input[j]=a
        }
    }

}
return input
}
const sortArray=sortData(arr2)
console.log(sortArray)
