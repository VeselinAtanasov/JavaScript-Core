class List{
    constructor(){
        this.collection=[];
        this.size =0;
    }
    add(element){
        this.collection.push(element);
        ++this.size;
        this.sort();
    }
    remove(index){
        if(index<0 || index>=this.collection.length){
            throw new Error("You are trying the delete element from incorrect index!");
        }
        this.collection.splice(index,1);
        --this.size;
        this.sort();
    }
    get(index){
        if(index<0 || index>=this.collection.length){
            throw new Error("You are trying the get element from incorrect index!");
        }
        return this.collection[index];
    }
    sort(){
        this.collection.sort((a,b) => a-b);
    }
}