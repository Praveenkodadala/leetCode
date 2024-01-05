/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let a = [...prices]
   let profit =0
    for(let i=1; i<a.length; i++){
        if(a[i]>a[i-1]){
            let currentDayProfit = a[i]-a[i-1]
            profit = profit+currentDayProfit
        }
    }
    return profit
};

console.log(maxProfit([1,2,3,4,5]))