// leap year or not

let year = prompt('enter the year');
if(year%4 === 0 && year%100 !== 400 && year%400 === 4){
    console.log(`${year} a leap year`);
} else {
    console.log(`${year} not a leap year`);
}
