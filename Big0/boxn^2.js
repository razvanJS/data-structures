
const boxes = ['a', 'b', 'c', 'd', 'e']
const numbers = [1, 2, 3, 4, 5]
const days=['Luni','Marti','Miecrui','Joi','Vineri']

function boxToNr(boxes,numbers){
    for(let i=0;i<boxes.length;i++){
        for(let j=0;j<numbers.length;j++){
            for(let z=0;z<days.length;z++){
                console.log(boxes[i],numbers[j],days[z])

            }
        }
    }
}
/*
a 1 luni ,a 1 marti ,a 1 miercuri ,a 1 joi,a 1 vineri
a 2 luni ,a2 marti, a 2 miercuri ,a 2 joi,a 2 vineri
*/
//0(a*b*c)
//0(n^2)
boxToNr(boxes,numbers)



// function logBoxes2(array1, array2) {//n,m
//     for (let i = 0; i < array1.length; i++) {
//         for (let j = 0; j < array2.length; j++) {
//             console.log(array1[i], array2[j])
//         }
//     }
// }
// logBoxes2(boxes, numbers)
//O(n*m)