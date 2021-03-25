function Palindrome(num){
    let r,sum=0,temp;
    temp = num;
    while(num > 0){
        r = num%10;
        sum = (sum*10) + r;
        num = Math.floor(num/10);
    }
    if(temp === sum){
        console.log('palindrome')
    } else {
        console.log('not palindrome');
    }
}


let number= 151;
Palindrome(number);
