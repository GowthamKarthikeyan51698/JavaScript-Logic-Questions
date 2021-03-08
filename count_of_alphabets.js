// we count the number of alphabets and place the count before the alphabet

//test cases:

// input = AAAABBBBCCCCCCCC 
// output = 4A4B8C

// input = AABBBCCDEEEFGGGGGH
// output = 2A3B2C1D3E1F5G1H

function cnt_str(str){
    var str = str.split("");
    var count = 1;
    var res = '';
    for (let i=0; i<str.length-1; i++){
        var curr_num = str[i];
        var nxt_num = str[i+1];
        if (curr_num === nxt_num){
            
            count += 1;
            
            continue;
        } else {
            
            res = res + count + curr_num;
            count = 1;
        }
    }
    res = res+count+nxt_num;
    return res
}


x = "AABBBCCDEEEFGGGGGH"
console.log(cnt_str(x));