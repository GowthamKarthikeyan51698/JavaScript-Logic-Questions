function concatenate(str1, str2){
    let i=0,
        j=str1[str1.length-1];
        str1 += ' ';
    while(str2[i]){
        str1 += str2[i];
        i++;
    }
    return str1;
}

let str1 = 'John',
    str2 = 'Doe';
console.log(concatenate(str1,str2));
