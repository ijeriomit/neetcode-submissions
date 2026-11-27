class Solution {
    maxSubArrayLen(nums, k) {
        const first = new Map([[0, -1]]);
        let total  = 0, ans = 0;
        for(let i =0; i < nums.length; i++){
            total += nums[i];
            if(first.has(total - k)){
                ans = Math.max(ans, i - first.get(total - k));
            }
            if(!first.has(total)){
                first.set(total, i);
            }
        }

        return ans;
    }
}
