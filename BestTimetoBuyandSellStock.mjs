/**
 * @param {number[]} prices
 * @return {number}
 */
// var maxProfit = function(prices) {
//     let max = 0
//     for(let i=0; i<prices.length; i++){
//         let buy = prices[i]
//         for(let j=i+1; j<prices.length; j++ ){
//             let sell = prices[j]
//             max = Math.max(sell-buy, max)
//         }
//     }
//     return max
// };

// console.log(maxProfit([7,1,6,4,3,1]))

var maxProfitFunc = function (prices) {
	let min = Infinity;  
	let maxProfit = 0;
	for (let i = 0; i < prices.length; i++) {
		let current = prices[i];
		min = Math.min(current, min);  //buy
		let profit = current - min;    //sell
		maxProfit = Math.max(profit, maxProfit);
	}

	return maxProfit;
};

console.log(maxProfitFunc([7, 1, 6, 4, 3, 1]));
