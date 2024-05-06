function checkPrime(n){
    for (let i = 2; i < Math.sqrt(n) ; i++) {
        if(n%i===0){
            return 0;
        }
    }
    return n>1;
}

function arrPrime(arr){
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (checkPrime(arr[i])){
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

let arr=[];
let n = arr.length;
do{
    n = +prompt('Input size of array');
}while(!Number.isInteger(n) || n<=0 || n>20);

for (let i = 0; i < n; i++) {
    do{
        arr[i] = +prompt('Element '+i);
    }while(!Number.isInteger(arr[i]));
}
let newArr = arrPrime(arr);
let indexMin,temp;
for (let i = 0; i < newArr.length-1; i++) {
    indexMin = i;
    temp=1;
    for(let j=i+1;j<newArr.length;j++){
        if(newArr[j]<newArr[indexMin]){
            indexMin = j;
        }
    }
     temp = newArr[i];
    newArr[i] = newArr[indexMin];
    newArr[indexMin] = temp;
}

for (let i = 0; i < newArr.length; i++) {
    document.write(newArr[i]+' ');
}