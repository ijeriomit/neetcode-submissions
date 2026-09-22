class Solution:
    def isValid(self, s: str) -> bool:
        openChars = ['[', '{', '(']
        closeChars = [']', '}', ')']
        stack = []
        valid = True
        for letter in s:
            if letter in openChars:
                stack.append(letter)
            elif letter in closeChars and stack:
                openIndex = openChars.index(stack.pop())
                closeIndex = closeChars.index(letter)
                valid = openIndex == closeIndex
            elif letter in closeChars and len(stack) == 0:
                valid = False
            if valid is False:
                return False
        return len(stack) == 0

