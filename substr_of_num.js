// print substrings of a number that sums up to 10
// eg: 2825302 = 28, 82, 253, 2530, 5302 

function Substr(str){
    let arr=[];
    for (let i=0; i<str.length; i++){
        end_index = str.length - i - 1;
        // console.log(i)
        for(let j=0; j<end_index; j++){
            // console.log(j);
            if(find_sum(str.slice(j,j+i)) === 10){
                arr.push(str.slice(j,j+i));
            }
        }
    }
    console.log(arr);
}

function find_sum(num){
    sum = 0;
    for(let i=0; i<num.length; i++){
        sum = sum + parseInt(num[i]);
        // console.log(sum)
    }
    
    return sum;
}


let number = "2825382";
Substr(number);
