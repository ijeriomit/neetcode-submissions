class Solution:
    def twoSum(self, numbers: List[int], target: int) -> List[int]:
        left = 0
        right = len(numbers) - 1
        print(left, right)
        # counter = 0
        while(left < right):
            total = numbers[left] + numbers[right]
            # print(left, right, total)
            if(total == target):
                break
            # elif(total < target and right == len(numbers) - 1):
            #     left += 1
            elif(total < target):
                left += 1
            # elif(total > target and left == 0): 
            #     right -= 1
            else: 
                right -= 1
            # counter += 1
           
        return [left + 1, right + 1]