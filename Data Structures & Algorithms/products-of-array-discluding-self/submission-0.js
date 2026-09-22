class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let ans = Array(nums.length).fill(1);
        return this.postFix(nums, this.preFix(nums, ans));
    }

    preFix(nums, ans) {
        let prefix = 1;
        for(let i =0; i < nums.length; i++){
            ans[i] = prefix;
            prefix = prefix * nums[i];
        }
        console.log("prefix: ", ans);
        return ans;
    }

    postFix(nums, ans) {
        let postfix = 1;
        for(let j = nums.length - 1; j >= 0; j--)
        {
            ans[j] = postfix * ans[j]
            postfix = nums[j] * postfix;
        }
        console.log("postfix: ", ans);
        return ans;
    }
}
