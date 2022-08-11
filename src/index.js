module.exports = function reverse (n) {
    let m = Math.abs(n);
    let str = m.toString();
    let result = "";
    let i = 0;
  
    while (i < str.length){
        result= `${str[i]}${result}`;
        i +=1;
    }
    result = Number(result);
    return result;
    }       
