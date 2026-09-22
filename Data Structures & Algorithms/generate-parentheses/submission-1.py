class Solution:
    
    def __init__(self):
        self.result = []
    def generateParenthesis(self, n: int) -> List[str]:
   
        self.dfs("", 0, 0, n)
        return self.result
    
    def dfs(self, parenthesis, openCount, closeCount, n):
        if(openCount == n and closeCount == n):
            self.result.append(parenthesis)
            return
        
        if(openCount < n):
            parenthesis += '('
            self.dfs(parenthesis, openCount+1, closeCount, n)
            parenthesis = parenthesis[:-1]
        if(closeCount < openCount):
            parenthesis += ')'
            self.dfs(parenthesis, openCount, closeCount + 1, n)
            parenthesis = parenthesis[:-1]
    
