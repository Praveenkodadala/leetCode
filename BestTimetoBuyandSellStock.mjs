/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {

    let minPrice = Infinity;
console.log(typeof minPrice)
    let max = 0
    for(let i=0; i<prices.length; i++){
        let buy = prices[i]
        for(let j=i+1; j<prices.length; j++ ){
            console.log(prices[i], prices[j])
            let sell = prices[j]
            max = Math.max(sell-buy, max)
        }
    }
    console.log(max)
};

console.log(maxProfit([7,6,4,3,1]))