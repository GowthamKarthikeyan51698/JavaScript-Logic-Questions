function Prime(num){
    let flag=0, m=0;
    m = num/2;
    for(let i=2; i<=m; i++){
        if(num%i === 0){
            console.log("number is not prime");
            flag = 1;
            break;
        }
    }
    if (flag === 0){
        console.log('number is prime');
    }
}

let number = 26;
Prime(number);
