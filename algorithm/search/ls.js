//1 SEARCH ALGORITHM IN JAVASCRIPT

const books=['Lord Of The rings',"ABSALOM",'A time to kill',
'The house of Mirth','East of Eden','Capra cu Trei Iezi']

const myBook=books.find(book=>book==='A time to kill')
const bookIndex=books.findIndex(book=>book="A time to kill")
const myBookExist=books.includes('Capra cu trei Iezi')

console.log(myBook,bookIndex,myBookExist)
let book;
book='Lord Of The rings'
let searchBook;
for(let i=0;i<books.length;i++){
    if(books[i]===book){
       searchBook=books[i]
    }
    else  'Cartea nu Exista'
}



console.log(searchBook)