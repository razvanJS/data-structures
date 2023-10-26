
//1.simple sort
const sortValus=['r','q','z','q','o','b','m','n']
 sortValus.sort()
 console.log(sortValus)

 //2.sort callback
 const sortNumbers=[100,322,123,1,23,13,2]
//  sortNumbers.sort((a,b)=>a-b)
//  sortNumbers.sort((a,b)=>a<b?-1:1)
 sortNumbers.sort((a,b)=>a<b?1:-1)
 console.log(sortNumbers)

 
 const sortObj=[{id:3000,age:20,year:1994},{id:1002,age:30,year:2023},{id:1002,age:100,year:1975},
    {id:2009,age:10,year:1978},  {id:1002,age:1,year:2022}
 ]

 //3 sort Obj
 sortObj.sort((a,b)=>{
//    if(a.age<b.age)return -1
    if(a.year<b.year)return -1


   else return 1
  
  
 })
 console.log(sortObj)