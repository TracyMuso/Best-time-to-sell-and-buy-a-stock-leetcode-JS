/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let maxProfit = 0
    for(let buyPrice = 0; buyPrice < prices.length; buyPrice++) {
        for (let sellPrice = buyPrice + 1; sellPrice < prices.length; sellPrice++) {
            let profit = prices[sellPrice] - prices[buyPrice]
            maxProfit = Math.max(maxProfit, profit)
        }
    }
    return maxProfit;
};
