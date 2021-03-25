// Perfect number
function perfect_num(n){
    let rem, sum = 0;
    for(let i=1; i<n; i++){
        rem = n % i;
        if(rem === 0){
            sum = sum + i;
        }
    } 
    if ( sum === n){
        console.log(`${n} is a perfect number`);
    } else {
        console.log(`${n} is not a perfect number`);
    }
}


let number = 8128;  //28
perfect_num(number);
