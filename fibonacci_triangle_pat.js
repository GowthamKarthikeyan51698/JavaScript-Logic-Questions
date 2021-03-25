// Fibonacci triangle pattern

function fibonacci_triangle(limit){
    let c,a, b;
    for(let i=1; i<=limit; i++){
        a=0;
        b=1;
        document.write(b);
        document.write("&nbsp&nbsp&nbsp&nbsp");
        for(let j=1 ;j<i ;j++){
            c= a+b;
            document.write(c);
            document.write("&nbsp&nbsp&nbsp&nbsp");
            a=b;
            b=c;
        }
    document.write("<br>");
    }
}
let limit = 9; 
fibonacci_triangle(limit);
