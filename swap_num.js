// swap a number using + and -

function swap(a,b){
    num1 = a;
    num2 = b;
    a = a+b; //a = 30 (10+20)
    b = a-b; //b = 10 (30-20)
    a = a-b; //a = 20 (30-10)
    return `a=${num1} and b=${num2} are swapped as a=${a} and b=${b}`;
}

console.log(swap(10,20));



// swap a number using * and /

function swap(a,b){
    num1 = a;
    num2 = b;
    a = a*b; //a = 30 (10+20)
    b = a/b; //b = 10 (30-20)
    a = a/b; //a = 20 (30-10)
    return `a=${num1} and b=${num2} are swapped as a=${a} and b=${b}`;
}

console.log(swap(10,20));
