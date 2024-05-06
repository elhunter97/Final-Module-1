class Mobile{
    constructor(id,name,brand,price){
        this.id = id;
        this.name = name;
        this.brand = brand;
        this.price = price;
    }
    getId(){
        return this.id;
    }

    getName(){
        return this.name;
    }

    getBrand(){
        return this.brand;
    }

    getPrice(){
        return this.price;
    }

    setId(id){
        this.Id = id;
    }

    setName(name){
        this.name = name;
    }

    setBrand(brand){
        this.brand = brand;
    }

    setPrice(price){
        this.price = price;
    }

    toSString(){
        return this.id+' '+this.name+' '+this.brand+' '+this.price;
    }
}