// you have,
// x no. of 5 rupee coins
// y no. of 1 rupee coins
// purchase item for z rupees
// shopkeeper wants exact change
// pay him maximum number of coins
// if exact change not possible then display -1

// input:

// Available rs.1 coins : 2
// Available rs.5 coins : 4
// Amount to be made : 21

// output:

// rs.1 coins needed : 1
// rs.5 coins/notes needed : 4


function make_amount(rupees_to_make, no_of_five, no_of_one){
    let five_needed = 0,
        one_needed = 0,
        flag = 0,
        fives = 0,
        ones = 0;
    if(rupees_to_make<=(no_of_five*5 + no_of_one)){
        fives = rupees_to_make / 5;
        ones = rupees_to_make % 5;
        if(fives > no_of_five){
            five_needed = fives;
            one_needed = ones;
            flag = 1;
        } else if(fives > no_of_five){
            five_needed = no_of_five;
            one_needed = rupees_to_make - (five_needed*5);
            flag = 1;
        }
    } 
    if(flag === 1){
        return [Math.floor(five_needed), one_needed]
    } else {
        return -1;
    }
}

let x = 21, y = 4, z = 2;
console.log(make_amount(x, y, z)); 