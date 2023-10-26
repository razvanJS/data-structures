function boooo(n) {
    for (let i = 0; i < n; i++) {
        console.log("boooooo")
    }
    //i=0 oscupa memorie 
}

//TIME 0(N)
//Space 0(1)


function arrayOfHiNTimes(n) {
    let hiArray = []
    for (let i = 0; i < n; i++) {
        hiArray[i] = 'hi' //O(N)
    }
    console.log(hiArray)
    return hiArray
}
//TIME 0(n)
//SPAce O(n)
arrayOfHiNTimes(10)

function logMyNameNtimes(n) {
    for (let i = 0; i < n; i++) {
        console.log('Oprea Razvan')
    }
}
logMyNameNtimes(10)
//0(1)

function createVarible(n) {
    let myName;
    for (let i = 0; i < n; i++) {
        myName = 'Oprea Razvan'
    }
    return myName
}

const createMyName = createVarible(10)
console.log(createMyName)
//0(n) 0(1)

function createArray(n) {
    let array1 = []
    let array2 = [];
    let arryCocat;

    for (let i = 0; i < n; i++) {
        array1[i] = 'oprea razan'//0(n)
        //O(N)

    }
    for (let i = 0; i < n; i++) {
        array2[i] = 'Vasile' //0(n)
        //O(N)
    }
    arryCocat = [...array1, ...array2] //O(n)
    return arryCocat

}

//TImpului 0(N)
//Spatilui 0(n)

const myNameArr = createArray(10)
console.log(myNameArr) //0(n)  0(n)


