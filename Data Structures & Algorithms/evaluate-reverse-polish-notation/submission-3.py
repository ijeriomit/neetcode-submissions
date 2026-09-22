class Solution:
    def evalRPN(self, tokens: List[str]) -> int:
        stack = []
        curr = 0

        for token in tokens:
            match token:
                case '+':
                    stack.append(stack.pop() + stack.pop())
                case '-':
                    a, b = stack.pop(), stack.pop()
                    stack.append(b - a)
                case '*':
                    stack.append(stack.pop() * stack.pop())
                case '/':
                    a, b = stack.pop(), stack.pop()
                    stack.append(int(b / a))
                case _:
                    stack.append(int(token))
            print(stack)
        return stack[0]
