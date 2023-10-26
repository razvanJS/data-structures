//1 object

const user = {
    age: 54,
    name: "kyle",
    scream() {
        console.log('Ahhhhhh')
    }
}

user.age//0(1)
user.name//0(1)
user.scream()//0(1)

//2 set 
const mySet = new Set([1, true, 'razvan', false])

//Doar valori de tip keye
mySet.add('Razvan')//0(1)
mySet.add('Vosy')//0(1)
console.log(mySet.has(1))//0(1)
mySet.delete(1)//0(1)
console.log(mySet.size)




//3 Map
const myMap=new Map()
myMap.set(true,'Razvan').
set(false,'Andrei').
set('age',33).
set('ocupation','Student')
const myName=myMap.get(true) //0(1)
if(myMap.has(true)){
    console.log(myName)
    //0(1)
}
myMap.delete(true)//0(1)
console.log(myMap)

const myMap2=new Map([[true,'Razvan'],[false,'Andrei'],['age',33]])
console.log(myMap2)

