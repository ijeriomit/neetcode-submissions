class Solution {
    maximumSumScore(nums) {
        let lPrefix = 0;
        let rPrefix = 0;
        let maxSum = -Infinity;

        for(let l =0, r = nums.length - 1; l < nums.length && r >= 0; l++, r--){
            lPrefix += nums[l];
            rPrefix += nums[r];
            maxSum = Math.max(maxSum, Math.max(lPrefix, rPrefix));

        }

        return maxSum;
    }
}
