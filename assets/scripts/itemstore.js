class Item{
    constructor(id, itemname,price)
    {
        this.id=id;
        this.itemname=itemname;
        this.price=price;
        
    }
}

class ItemRepository{
    constructor(){
        this.itemList=[];
       
    }
    addItem(item){
        if (item.id != "" && item.itemname != ""    && item.price != "")
        {
            this.itemList.push(item);
        }
    
    else {
        document.getElementById('demo').innerHTML="Some data is not filled please fill and submit";
        // $('.alert').alert("Some data not filled")
      }
    }
    updateItem(id)
    {
        for(let i=0;i<this.itemList.length;i++)
        {
            if(this.itemList[i].id==item.id){
                this.itemList.splice(i,1,id);
            }
        }
        throw 'item not found exception';
    }
    deleteItem(id)
    {
        let selected = this.getitemById(id);
        if(selected==undefined)
        {
            throw 'Not found exception'
        }
        const index=this.itemList.indexOf(selected);
        this.itemList.splice(index,1);
    }

    getitem()
    {
        return this.itemList;
    }

    getitemById(id)
    {   
        if(id!="" || id!=undefined){
        return this.itemList.find((item)=>item.id==id);
        }
        else{
            throw 'Id not found'
        }

    }

}