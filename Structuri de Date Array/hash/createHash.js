class HasTable{

    constructor(size){
        this.data=new Array(size)

    }
    _hash(key){
        let hash=0
        for(let i=0;i<key.length;i++){
            hash=(hash+key.charCodeAt(i)*i)%this.data.length
        }
        return hash
    }

   
    set(key,value){
        const address=this._hash(key)
        //adress=33 ,adress=45
        if(!this.data[address]){
            //this.data[adress] its unic
          this.data[address]=[]
          //[]=>emty shelf
          this.data[address].push([key,value])
          //[key,value]=>push the key and value in the emty sheflt [[key,value]]

         
         
   

        }
        else{
            //this.data[adress]=>if the address exist and we have a collision
            
           this.data[address].push([key,value])
           //[[key,value],[key,value]]=>we push the key and value in the same shelft
            

        }
       
        return this.data

    }


    get(getKey){
        const address=this._hash(getKey)
        //key=>mere hash(mere) its the memory adresss of the backet //ex=33 [.....,[mere,30],...]

        const currnetBacket=this.data[address]
        //currentBacket have the data in this memory adress the hash method has genereted
        if(!getKey||!currnetBacket)return
        //getKey don`t exsit we return undefined
        //currentBacket dont`t exist we return undefind olso

        
        for(let i=0;i<currnetBacket.length;i++){
           
            
            //currentBacket=mere its in the memory 33 we recive the array whith all the element
            // memory sheft 32 [[key,value],[key,value],[key,value],[key,value]]
            //loop over the currentbacket array 
            //and if key macthes the getkey in the get method we return the value of that key
            const [key,value]=currnetBacket[i]
          
            if(getKey===key)return value
          
        }
    
        
           

    }

    getBachetData(type){
        const bachetCollsion=[]
        const bachetWithOnePair=[]
       for(let i=0;i<this.data.length;i++){
           //[[[key,value]],[[key,value],[key,value]],[[key,value],emtyx10,[[key,value],[key,value]]]]
        //    this.data[i] //[[key,value]],[[key,value]]
        //    this.data[i][0]//[key,value],[key,value]
        const bachet=this.data[i]
        if(bachet){
                if(bachet.length===1){
              
                    bachetWithOnePair.push(bachet[0][type])
                }
                else{
                    for(let j=0;j<bachet.length;j++){

                    bachetCollsion.push(bachet[j][type])
    
                    }

                }

            
        }
       }
       
    
       const bachetData= {
        onePairBachet:bachetWithOnePair,
        collsionBachet:bachetCollsion,
        allData:[...bachetWithOnePair,...bachetCollsion],
                
    
    }
       return bachetData

    }







    keys(){
        
       return   this.getBachetData(0)


      
    }

    values(){
        return   this.getBachetData(1)
    }
  
    
}

const myHash=new HasTable(10)

myHash.set('mere',40)
myHash.set('pere',50)
myHash.set('prune',4330)
myHash.set('portocale',4333330)
myHash.set('banane',4)
myHash.set('pierisca',-4)
myHash.set('grefa',40)




console.log(myHash.values())

