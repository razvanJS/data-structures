//Eliminarea Constantelor

const printFirstItemThenFirstHalfThenSayHi100Times = function (items) {
    console.log(items[0]) //0(1)
    let halfOfItems = Math.floor(items.length / 2)//0(n/2)
    let i = 0 //0(1)
    while (halfOfItems > i) {
        console.log(i)
        i++
        //0(n)
       
    }
    for (let i = 0; i < 100; i++) {
        console.log(`Log this function 100 times`)
        //0(100)
       
    }
}

//0(2+2n/2+100)
//0(2n/2)
//0(n)
printFirstItemThenFirstHalfThenSayHi100Times([10, 12, 13, 14, 15, 16])