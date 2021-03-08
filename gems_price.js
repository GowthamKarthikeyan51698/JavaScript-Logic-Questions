//test cases: 

//calculate amount to be paid by customer based on list of gems and quantity purchased

// any bill above 30000 rupees is enabled with 5% discount

// if any gem required by customer is not available then return -1

// Assume quantity required for any gem will always be greater than 0
//input:
    // gems available at shop = ['Emerald', 'Ivory', 'Jasper', 'Ruby', 'Garnet'],
    // price of available gems = [1760, 2119, 1599, 3920, 3999],
    
    // gems_required_by_customers = ['Ivory', 'Emerald', 'Garnet']
    // quantity_of_each_gem_required_by_customer = [3, 10, 12];

// Logic:

function calculate_bill_amount(gems_list, price_list, reqd_gems, reqd_quantity){
    let flag = 0;
    for(i=0 ;i<reqd_gems.length; i++){
        for(j=0; j<gems_list.length; j++){
            // console.log(i);
            // console.log(j);
            if(reqd_gems[i] === gems_list[j]){
                flag = 1;
                break;
            } else {
                continue;
            }
        }
        if(gems_list.length === j && reqd_gems[i] !== gems_list[j]){
            flag = 0;
            break;
        }
    }
    if(flag === 1){
        let bill_amount = getPrice(price_list, gems_list, reqd_gems);
        if(bill_amount > 30000){
            bill_amount = bill_amount - (bill_amount * 0.05);
        }
        return bill_amount
    } else {
        return -1;
    }
}

function getPrice(price_list, gems_list, reqd_gems){
    for (i=0 ; i<reqd_gems.length; i++){
        for(j=0; j<gems_list.length; j++){
            if(reqd_gems[i] === gems_list[j]){
                // console.log(i);
                // console.log(j);
                bill_amount = bill_amount+(price_list[j]*reqd_quantity[i]);
                break;
            } else {
                continue;
            }
        }
    }
    return bill_amount;
}

var bill_amount = 0;
let gems = ['Emerald', 'Ivory', 'Jasper', 'Ruby', 'Garnet'],
    price = [1760, 2119, 1599, 3920, 3999],
    // gems and price have 1-1 correspondence
    reqd_gems = ['Ivory', 'Emerald', 'Garnet'],
    reqd_quantity = [3, 10, 12];
     // reqd_gems and reqd_quantity have 1-1 correspondence
console.log(calculate_bill_amount(gems, price, reqd_gems, reqd_quantity));
