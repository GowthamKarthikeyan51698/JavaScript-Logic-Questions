// count the number of digits 


function Count_of_digits(num){
    let count = 0;
    temp = num; // to store the original number
    while (num > 0){
        num = Math.floor(num/10);
        count++; 
    }
    num = temp; // to recover the stored number and print in the output
    return `the count of digits for ${num} is ${count}`;
}

let number = 54377;
console.log(Count_of_digits(number));
