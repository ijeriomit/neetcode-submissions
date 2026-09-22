class Solution:
    def permute(self, nums: List[int]) -> List[List[int]]:
        result = []
        if(len(nums) == 1):
            return [nums[:]]
        
        for i in range(0, len(nums)):
            val = nums.pop(0)
            permutations = self.permute(nums)
            
            for perm in permutations:
                perm.append(val)
            result.extend(permutations)
            nums.append(val)
        return result
    
