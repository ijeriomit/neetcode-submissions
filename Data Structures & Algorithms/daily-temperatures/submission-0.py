class Solution:
    def dailyTemperatures(self, temperatures: List[int]) -> List[int]:
        result = []
        stack = []
        for i in range(0, len(temperatures)):
            curr = temperatures[i]
            top = stack[-1] if stack else [curr, i]
            result.append(0)
            while(top[0] < curr):
                result[top[1]] = i - top[1]
                stack.pop()
                top = stack[-1] if stack else [curr, i]
            stack.append([curr, i])

        return result
