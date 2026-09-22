class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        maps = {}
        groups = []
        for i in range(0, len(strs)):
            sorted_word = self.generateSortedWord(strs[i])
            if(sorted_word in maps.keys()):
                maps[sorted_word].append(i)
            else:
                maps[sorted_word] = [i]
        i = 0
        for values in maps.values():
            groups.append([])
            for j in range(0, len(values)):
                groups[i].append(strs[values[j]])
            i += 1
        return groups
      
    def generateSortedWord(self, word):
        sorted_word = "".join(sorted(word))
        return sorted_word