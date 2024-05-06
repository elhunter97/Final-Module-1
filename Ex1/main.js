let arr = [];
let n = arr.length;
do{
    n = +prompt('Input size of array');
}while(!Number.isInteger(n) || n<=0 || n>20);

for (let i = 0; i < n; i++) {
    do{
        arr[i] = +prompt('Element '+i);
    }while(!Number.isInteger(arr[i]));
}

for (let i = 0; i < n; i++) {
    document.write(arr[i]+' ');
}
document.write('<br>');
let sumOdd = 0;
let sumEven = 0;
for (let i = 0; i < n; i++) {
    if (arr[i] % 2 === 0) {
        sumEven+=arr[i];
    }
    else {
        sumOdd+=arr[i];
    }
}
document.write('Result = '+(sumEven-sumOdd));

