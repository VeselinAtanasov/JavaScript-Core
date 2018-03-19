class Repository {
    constructor(props) {
        this.props = props;
        this.data = new Map();
        this.classId = 0;
        this.count=0;
    }


    get count() {
        return this._count;
    }

    set count(value) {
        this._count = value;
    }

    validateEntity(entity) {
        for (let classProps in this.props) {
            if (!entity.hasOwnProperty(classProps)) {
                throw new Error(`Property ${classProps} is missing from the entity!`)
            }
            if (this.props[classProps] !== typeof entity[classProps]) {
                throw new TypeError(`Property ${classProps} is of incorrect type!`)
            }
        }
        return true;
    }

    add(entity) {
        if (this.validateEntity(entity)) {
            this.data.set(this.classId, entity);
            this.count++;
            return this.classId++;
        }
    }

    get(id) {
        if (this.data.has(id)) {
            return this.data.get(id);
        }else{
            throw new Error(`Entity with id: ${id} does not exist`)
        }

    }

    update(id, newEntity){
        if(!this.data.has(id)){
            throw new Error(`Entity with id: ${id} does not exist!`)
        }
        if(this.validateEntity(newEntity)){
            this.data.set(id,newEntity)
        }
    }

    del(id){
        if(!this.data.has(id)){
            throw new Error(`Entity with id: ${id} does not exist!`)
        }
        this.count--;
        this.data.delete(id);
    }
}



let props = {
    color: "string",
    length: "number"
};
let repo = new Repository(props);
repo.get(5)