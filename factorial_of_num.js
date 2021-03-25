// factorial of number without recursion

function factorial(num){
    let fact = 1;
    for(let i=1; i<=number ; i++){
        fact = fact * i;
    }
    return `Factorial of ${num} is ${fact}`;
}

let number = 5;
console.log(factorial(number));

// factorial of number with recursion

function factorial(num){
    let fact = 1;
    if( num === 0 ){
        fact;
    } else {
        fact = (num* factorial(num-1));
    }
    return fact;
}


let number = 5;
console.log(factorial(number));
