class Solution:
    def dailyTemperatures(self, temperatures: List[int]) -> List[int]:
        ans = [0] * len(temperatures)
        stack = []
        for i in range(len(temperatures)):
            currentTemp = temperatures[i]
            while(len(stack) != 0 and stack[-1][1] < currentTemp):
                popped = stack.pop()
                ans[popped[0]] = i - popped[0]
            stack.append([i, currentTemp])
        return ans