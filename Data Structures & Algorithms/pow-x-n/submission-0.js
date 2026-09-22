class Solution {
    /**
     * @param {number} x
     * @param {number} n
     * @return {number}
     */
    myPow(x, n) {
        let ans = 1;
        const absN = n >= 0 ? n : n * -1;
        for(let i = 0; i < absN; i++){
            ans *= x
            // console.log("x: ", x, ans);
        }
       if(n < 0){
            ans = 1 / ans; 
       }
        return ans;
    }
}
