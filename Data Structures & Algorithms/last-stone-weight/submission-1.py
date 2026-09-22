import bisect

class Solution:
    def lastStoneWeight(self, stones: List[int]) -> int:
        #initial sort O(nlog(n))
        #loop while len >= 2
        stones.sort();
        while len(stones) >= 2:
            smash = stones[-1] - stones[-2]
            stones.pop(-1)
            stones.pop(-1)
            if smash != 0 :
                bisect.insort(stones, smash)
    

        return stones[0] if len(stones) == 1 else 0
