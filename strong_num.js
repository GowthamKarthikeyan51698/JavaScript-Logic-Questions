// Strong number 
	// eg : 145 
		//  1! +4! + 5! 
		//  =145

function Strong_num(n){
    let sum=0, temp = n,r,f;
    while(temp != 0){
        r=temp%10;
        f=fact(r);
        temp=Math.floor(temp/10);
        sum = sum+f;
    }
    if(sum === n){
        console.log('Number is strong');
    } else {
        console.log('Number is not strong');
    }
}
function fact(r){
    let mul = 1;
    for(let i=1; i<=r; i++){
        mul= mul*i;
    }
    return mul;
}

let number = 145;
Strong_num(number);
