class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     */
    generateParenthesis(n) {
        const result = [];
        const generate = (curr, open, close) => {
            if(open == 0 && close ==0){
                result.push(curr);
                return;
            }
            // console.log(curr, open, close);
            if(open > 0){
                generate(curr + "(", open-1, close);
            }
            if(close > open){
                generate(curr + ")", open, close -1);
            }
        }
        generate("", n, n)
        return result;
    }
}
