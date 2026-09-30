class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const stack = [];
        
        for(let i = 0; i < tokens.length; i++) {
            let token = tokens[i];
            let result = null;
            if(token == '*'){
                let [right, left] = this.getOperands(stack);
                result = left * right;
                stack.push(result);
            } else if(token == '+'){
                let [right, left] = this.getOperands(stack);
                result = left + right;
                stack.push(result);
            } else if(token == '-') {
                let [right, left] = this.getOperands(stack);
                result = left - right;
                stack.push(result);
            } else if(token == '/'){
                let [right, left] = this.getOperands(stack);
                result = Math.trunc(left / right);
                stack.push(result);
            } else {
                stack.push(token);
            }
            // console.log("Result: ", result, "token: ", token, "stack: ", stack);
        }

        return stack[0];
    }

    getOperands(stack){
        return [parseInt(stack.pop()), parseInt(stack.pop())]
    }
}
