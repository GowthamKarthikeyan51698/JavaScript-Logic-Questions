// generate fibonacci numbers

function fibonacci_num(num, n1, n2){
    let i, n3;
    console.log(n1);
    console.log(n2);
    for(i=2;i<num;i++){
        n3 = n1+n2;
        console.log(n3);
        n1 = n2;
        n2 = n3;
    }
}


let number = 15,
    n1 = 0,
    n2 = 1;
fibonacci_num(number, n1, n2)
