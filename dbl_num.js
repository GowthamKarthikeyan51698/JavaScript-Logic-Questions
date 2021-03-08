// Given a number, we must double that number and compare the digits of both number and the double of number

// test cases:

// if all the digits_of_number matches the digits in double_of_number, then return true otherwise, return false

//input : number: 125874
//        double_of_number : 251748

// output : true

// input : number: 125498
//         double_of_number: 250996

// output : false

function dbl_num(num){
    var str_num = String(num);
    var dbl_num = 2 * num;
    var str_dbl_num = String(dbl_num);
    var str_num_sort = str_num.split("").sort((a,b) => a-b);
    var str_dbl_num_sort = str_dbl_num.split("").sort((a,b) => a-b);
    if(str_num.length === str_dbl_num.length){
        for(let i = 0;i < str_num_sort.length ; i++){
            var flag;
            if(str_num_sort[i]===str_dbl_num_sort[i]){
                flag = 1;
            } else {
                flag = 0;
                break;
            }
        }
        if (flag === 1){
            return true;
        } else {
            return false;
        }
    }
}

var x = 125874;
console.log(dbl_num(x));