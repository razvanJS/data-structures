const numbers = [10, 13, 20, 30, 40, 50]

numbers[0]//0(1)


numbers.push(100)//0(1) [10, 13, 20, 30, 40, 50,100]



const arr = [0, 1, 4, 5, 6, 7]


arr.pop()//0(1) const arr = [0, 1, 4, 5, 6]

console.log(arr) 

arr.splice(2, 1)
console.log(arr)// const arr = [0, 1, 5, 6] 0(n/2) 0(n)


// arr.splice(2, 0, 10000000)
// console.log(arr) //0(n)

arr.shift()
console.log(arr) // const arr = [1, 5, 6] 0(n)
arr.unshift(23)
console.log(arr) // const arr = [34,1, 5, 6] 0(n)


