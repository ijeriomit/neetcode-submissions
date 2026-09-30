class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let symbols = new Map([['(', ')'], ['[', ']'], ['{','}'] ]);
        let stack = [];
        
        for(let i =0; i < s.length; i++){
            let char = s[i];
            if(symbols.has(char)){
                stack.push(char)
            } else if(symbols.get(stack.pop()) != char){
               return false;
            }
        }
        
        return stack.length ==0;
    }
}
