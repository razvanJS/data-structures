
const boxList = [200, 400, 700, 1000, 30]

const compersBox = (list) => list.map(box => box > 100 ? box - 50 : box);

const newBox = compersBox(boxList)
console.log(newBox)