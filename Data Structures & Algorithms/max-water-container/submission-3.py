class Solution:
    def maxArea(self, heights: List[int]) -> int:
        r = len(heights) - 1
        l = 0
        maxArea = 0
        while(l < r):
            area = min(heights[l], heights[r]) * (r - l)
            maxArea = max(maxArea, area)
            if(heights[l] < heights[r]):\
                l += 1
            else:
                r -= 1
        return maxArea