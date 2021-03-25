// triangle with numbers

function num_triangle(num){
    let str = "";
    for(let i=1; i<num; i++){
        for(let j=1; j<num-i; j++){
            str += "&nbsp&nbsp&nbsp";
        }
        for(let k=1; k<=i ; k++){
            str += String.fromCharCode(k + 64);
        }
        
        for(let l=1; l<i ; l++){
            str += String.fromCharCode(64 + i - l);
        }
        str += "<br>";
    }
    document.write(str);
}

let number = 5;
num_triangle(number);
