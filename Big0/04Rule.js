
//Eliminarea termnilor Non-Dominati
function printAllNumbersThenAllPairSums(numbers) {

    console.log('Aici sunt toate numerele dvs') //0(1)
    numbers.forEach(element => console.log(element)); //)0(n)

    console.log('Suma Numerelor Dvs') //0(2)
    numbers.forEach(number1 => {
        //O(n^2)
        numbers.forEach(number2 => console.log(number1 + number2))
    })
}

//0(2+n+n^2)
//0(n^2)


printAllNumbersThenAllPairSums([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])