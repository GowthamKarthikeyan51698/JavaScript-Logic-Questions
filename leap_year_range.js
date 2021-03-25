// leap years between the range of two years
// eg : 1990-2020 : 1992,1996,2000,2004,2008,2012,2016,2020

let startyear = prompt('enter the start year');
let endyear = prompt('enter the end year');
console.log(`the leap years between ${startyear} and ${endyear} are:`)
for(i=startyear; i<=endyear; i++){
    if((i%4 === 0) && ((i%400 === 0) || (i%100 !== 0)) ){
        console.log(i);
    } 
}
