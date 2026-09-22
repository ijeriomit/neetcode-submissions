class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const openArr = ["(","[","{"];
        const closeArr =  [")","]","}"];
        // const openCount =0;
        // const closeCount =0;
        const stack = [];

        for(const c of s){
            if(openArr.includes(c)){
                stack.push(c);
            }
            else if(closeArr.includes(c)){
                let index = closeArr.indexOf(c);
                if(stack.length > 0 && stack[stack.length - 1] == openArr[index]){
                    stack.pop();
                } else{
                    return false;
                }
            }
        }
        return stack.length ===0; 
    }
}
