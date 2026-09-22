class Solution:
    def hasDuplicate(self, nums: List[int]) -> bool:
        counts = {}
        for num in nums:
            if(num not in counts.keys()):
                counts[num] = 1
            else:
                return True
        return False