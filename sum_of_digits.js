// sum of digits 

function Sum_of_digits(num){
    let sum = 0,
        m = 0;
        temp = num  // to store the original number  
    while(num > 0){
        m = num%10;
        sum = sum+m;
        num=Math.floor(num/10);
    }
    num = temp // to recover the stored number and print in the output
    return `Sum of digits of ${num} is ${sum}`;
}


let number = 123;
console.log(Sum_of_digits(number));
