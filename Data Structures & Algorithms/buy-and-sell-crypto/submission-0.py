class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        buyIndex = 0
        sellIndex = 0
        maxProfit = 0
        
        while sellIndex < len(prices):
            transProfit = prices[sellIndex] - prices[buyIndex]
            if(transProfit < 0): #lower price found
                buyIndex = sellIndex
            elif(transProfit > maxProfit):
                maxProfit = transProfit 
                ##change buy and sell index
            sellIndex += 1
        return maxProfit