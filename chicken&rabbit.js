// we count 150 heads and 400 legs among chicken and
// rabbits in a farm

// how many rabbits and chicken do we have

/*
input = heads: 150,legs: 400
output = chicken:100 rabbit:50 = [100, 50]
*/
/*
LOGIC:
R+C = Heads       ----------1
4R+2C = Legs      ----------2
(rabbit and chicken have one head each)
(rabbit has 4 legs and chicken has 2 legs)

multiply eqn-1 by x-2
-2R-2C = 2*Heads

2R = (Legs-2*Heads)

R = (Legs - 2*Heads)/2

R = (400- 2*150)/2
i.e
100/2 = 50

from eqn-1, C = Heads - R 
C = 150 - 50 = 100

*/

function solve(heads, legs){
    let error_msg = 'No Solution',
        chicken_count = 0,
        rabbit_count = 0;
    if(legs%2 !== 0 || heads === 0 || heads>legs){
        return error_msg;
    } else{
        rabbit_count = (legs-2*heads)/2;
        chicken_count = (heads - rabbit_count);
        return [chicken_count, rabbit_count];
    }
}

console.log(solve(150, 400));