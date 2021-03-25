// Reverse a number

function reverse_number(num){
    let rev = 0, r;
    temp = num;
    while(num != 0){
        r = num%10;
        rev = (rev*10)+r;
        num = Math.floor(num/10);
    }
    num = temp;
    return `the reversed number of ${num} is ${rev}`
}

let number = 94653
console.log(reverse_number(number));
