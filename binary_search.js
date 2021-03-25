// Binary Search of an element

function Bin_search(n){
    let key=10,
        low = 0,
        high = n.length-1,
        flag = 0;
    while(low<=high){
        mid = Math.floor((low+high)/2);
        if(key === n[mid]){
            flag = 1;
            break;
        } else if(key < n[mid]){
            high = mid - 1;
        } else {
            low = mid + 1;
        }
        
    }
    if(flag === 1){
        console.log(`${key} is found in the array`);
    } else {
        console.log('Key not found');
    }
}


let num = [10,20,30,40,50];
Bin_search(num);
