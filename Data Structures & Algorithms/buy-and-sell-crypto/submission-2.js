class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let maxProfit = 0;
        for(let l =0, r=1; r < prices.length; r++){
            if(prices[r] <= prices[l]){
                l = r;
            } 
            let profit = prices[r] - prices[l];
            maxProfit = profit > maxProfit ? profit : maxProfit;
        }
        return maxProfit;
    }
}
