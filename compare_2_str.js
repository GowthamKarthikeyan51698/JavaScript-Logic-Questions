function compare(str1, str2){
    let flag = 0, 
        i = 0
    while(str1[i] && str2[i]){
        if(str1[i] !== str2[i]){
            flag = 1;
            break;
        }
        i++;
    }
    if(flag === 1){
        return 'not equal';
    } else {
        return 'equal';
    }
}


let str1 = 'madam',
    str2 = 'madam';
console.log(compare(str1, str2));
