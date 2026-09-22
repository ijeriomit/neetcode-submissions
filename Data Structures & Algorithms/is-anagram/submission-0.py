class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        count1 = self.getCount(s)
        count2 = self.getCount(t)
        return count1 == count2
    
    def getCount(self, word):
        count = {}
        for char in word:
            if(char in count.keys()):
                count[char] = count.get(char) + 1
            else:
                count[char] = 1
        return count