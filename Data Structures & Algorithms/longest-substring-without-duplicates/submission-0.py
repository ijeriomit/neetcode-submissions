class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        left = 0
        charSet = set()
        longest = 0
        right = 0
        print(s)
        while right < len(s):
            print(s[right], charSet)
            if(s[right] not in charSet):
                charSet.add(s[right])
                right += 1
            else:
                longest = max(longest, (right - left))
                left += 1
                right = left
                charSet = set()
                print("longest: ", longest, "l: ", left, "r: ", right, "set: ", charSet)
        return max(longest, (right - left))