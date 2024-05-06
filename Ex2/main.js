function countUpper(s){
    let cnt = 0;
    for (let i = 0; i < s.length; i++){
        if (s[i]>='A'&& s[i]<='Z'){
            cnt++;
        }
    }
    return cnt;
}

let s = prompt('Input string');
let cnt = countUpper(s);
if(cnt>0) {
    document.write(cnt+'');
}
else {
    document.write('The Strings is not contain upper char');
}