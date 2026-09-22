class Solution:
    def dailyTemperatures(self, temperatures: List[int]) -> List[int]:
            result = [0] * len(temperatures)
            stack = []
            for i in range(len(temperatures)):
                while len(stack) > 0 and temperatures[i] > stack[-1][0]:
                    result[stack[-1][1]] = i - stack[-1][1]
                    stack.pop(-1)
                stack.append([temperatures[i], i])
            return result