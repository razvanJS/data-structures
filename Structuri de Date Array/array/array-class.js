class MyArray {
    constructor() {
      this.length = 0;
      this.data = {};
      
    }
    deleteNrElemets(index,nrDeleteItems){
      //1 delete item at this.data with position index
     for(let i=0;i<nrDeleteItems;i++){
  
      //2  delete items at this.data with position index+ number  of items
      delete this.data[index+i]
      
       this.length--
  
  
   }
      }
  
      shiftAllTheItems(){
  
      //1 create an array with data values
      const dataArr= Object.values(this.data)
  
      //2 create an emty object
      const dataCopy={}
  
      for(const [key,values] of dataArr.entries()){
        //3 loop over the  dataArr array and put the key with the value in new data object
       dataCopy[key]=values
     
      }
         delete this.data
        //4 change data value with datacopy value,recreate the the object
        this.data={...dataCopy}
        
      }

      shiftItems() {
        for (let i = this.length - 1; i >= 0; i--) {
          this.data[i + 1] = this.data[i];
        }
      }
    


  
    get(index) {
      return this.data[index];
    }
  
    push(item) {
      this.data[this.length] = item;
      this.length++;
    }
  
    pop() {
      const lastItem = this.data[this.length - 1];
      delete this.data[this.length - 1];
      this.length--;
      return lastItem;
    }
  
   
    shift() {
      delete this.data[0];
      this.shiftItems();
      this.length--;
      return this.data[0]
    }
  
    unShift(item) {
      this.length++;
      this.shiftItems()
      let index=0;
      this.data[index]=item
      return item

  
    }
   
    splice(index,nrDeleteItems,item){
      this.deleteNrElemets(index,nrDeleteItems)
      if(nrDeleteItems>0)this.data[index]=item
      this.shiftAllTheItems()
     

     
         }
  }
  
  
  const myArray = new MyArray();
  
  myArray.push(35);
  myArray.push(49);
  myArray.push(50);
  myArray.push(750);
  myArray.push(150);
  myArray.push(1150);
  

  myArray.splice(1,1,'razvan')
  
  
  console.log(myArray);

