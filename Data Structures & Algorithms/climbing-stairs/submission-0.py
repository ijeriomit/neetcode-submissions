class Solution:
    count = 0
    def climbStairs(self, n: int) -> int:
        if(n < 0):
            return self.count
        if(n == 0):
            self.count+=1
            return self.count

        self.climbStairs(n - 1)
        self.climbStairs(n - 2)

        return self.count 
        