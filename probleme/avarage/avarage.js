//Ca valoare de input putem primi o strucutra de date de tip array,calculati media aritmetica 
//a valorilor considerare de fi numere din structura de date respectiva

//input [10,2,7]
//output 6.33
//1. Un numar real sau nu?
//2.functia poate primi alt tip de data inafara de numare?


function calcAverage(array){
    //1 ciclam element crem o variabila ''sum" care sa adune fiecare numar din sir 
    //la fiecare element din  sir ciclat

    if(typeof array !=='object')return;
    if(array.length<2)return;

    let sum=0
    
    //0(1)
    for(let i=0;i<array.length;i++){
   if(typeof array[i]!=='number')return;

     sum+=array[i]


    //0(n)
    }
    //2 impartim valoare varibilei sum la numaru lungimi arrayului primit
    return +(sum/array.length).toFixed(2)

}



const average=calcAverage([1,2])


const calcAverage2=(array)=>+(array.reduce((acc,value)=>acc+value,0)/array.length).toFixed(2)
//1 (acc+vlue)/arr.length
//0+10/3
//2 10+2 12/3
//3.33+2=1.77
//3 12+7 19/3
//4 
console.log(calcAverage2([10,2,7]))