class Solution:
    def generateParenthesis(self, n: int) -> List[str]:
        results = []

        def generate(openCount, closeCount, string):
            if(openCount > n or closeCount > n or closeCount > openCount):
                return
            if(openCount == n and closeCount == n):
                results.append(string)
                return

            generate(openCount + 1, closeCount, string + "(")
            generate(openCount, closeCount + 1, string + ")")
        
        generate(0,0,'')
        print(results)
        return results
