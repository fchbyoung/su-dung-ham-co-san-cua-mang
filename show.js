function bai1() {
    let arr = ['Red','Green','White','Black'];
    document.write(arr.toString());
}

function bai2() {
    let num = parseInt(prompt("Nhập số: "));
    let str = num.toString();
    let result = [str[0]];
    for(let x = 1; x < str.length; x++){
        if(str[x-1] % 2 === 0 && str[x] % 2 === 0){
            result.push('-',str[x]);
        }else{
            result.push('+',str[x]);
        }
    }
    document.write(result.join(''));
}

function bai3() {
    const str = prompt("Nhập vào một chuỗi bất kỳ : ");
    const UPPER = str.toUpperCase();
    const LOWER = str.toLowerCase();
    const result = [];
    for(var i = 0; i < str.length; i++){
        if(UPPER.indexOf(str[i]) !== -1){
            result.push(str[i].toLowerCase());
        }else if(LOWER.indexOf(str[i]) !== -1){
            result.push(str[i].toUpperCase());
        }else{
            result.push(str[i]);
        }
    }
    document.write(result.join(''));
}