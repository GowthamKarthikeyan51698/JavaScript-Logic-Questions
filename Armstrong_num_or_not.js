// Armstrong number

// eg:
/*
153 = (1*1*1)+(5*5*5)+(3*3*3)
where,
(1*1*1) = 1,
(5*5*5) = 125,
(3*3*3*) = 27,

1 + 125 + 27 = 153
hence 153 is a armstrong number
*/

//logic: 
function armstrong_number(num){
    let r,sum = 0,temp;
    temp = num;
    while(num > 0){
        r = num % 10;
        sum = sum+(r*r*r);
        num = Math.floor(num/10);
    }
    num = temp;
    if(temp === sum){
        console.log(`${num} is an armstrong number`);
    } else {
        console.log(`${num} is not an armstrong number`);
    }
}


let number = 153;
armstrong_number(number);
