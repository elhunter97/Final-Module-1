class Manage{
    constructor(arr) {
        this.mobile = arr;
    }

    addMobile(mobile){
        this.mobile.push(mobile);
    }
    show(){
        let show='';
        for(let i=0;i<this.mobile.length;i++){
            show+= this.mobile[i].toSString()+'<br>';
        }
        document.getElementById('show').innerHTML=show;
    }
}

let arr = [];
let manage = new Manage(arr);
function addNewMobile(){
    let id = prompt('ID');
    let name = prompt('Name');
    let brand = prompt('Brand');
    let price = +prompt('Price');

    let mobile = new Mobile(id, name, brand, price);
    manage.addMobile(mobile);
}
function show(){
    manage.show();
}


