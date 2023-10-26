
function three(){
    console.log('Three')
}

function two(){
    three()
    console.log('two')
}
function one(){
    
   
     two()
    console.log('one')
}

one()

