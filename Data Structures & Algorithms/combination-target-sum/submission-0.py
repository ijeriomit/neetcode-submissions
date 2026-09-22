class Solution:
    def combinationSum(self, nums: List[int], target: int) -> List[List[int]]:
        combos = []

        def recursion(i: int, sum: int, combo: List[int]):
            if(i >= len(nums) or sum >= target):
                if(sum == target):
                    combos.append(combo.copy())
                return
            combo.append(nums[i])
            recursion(i, sum + nums[i], combo)
            combo.pop()
            recursion(i + 1, sum, combo)
        
        recursion(0, 0, [])
        return combos


