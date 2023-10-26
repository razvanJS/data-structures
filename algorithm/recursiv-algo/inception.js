let counter=0
function inception(){
    debugger
    if(counter>2)return true
    else {
        counter++
        return inception()

    }
}
console.log(inception())
// inception(inception(inception('Done')))

// const inception2=function(){
//     console.log(true)
//     inception2()
// }
// inception2()
