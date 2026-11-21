class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    subarraySum(nums, k) {
        let count = 0;
        const prefixSums = new Map([[0, 1]]);
        let currSum = 0;
      
        for(let l = 0; l < nums.length; l++){
           currSum += nums[l];
           let diff = currSum - k;
           count += prefixSums.get(diff) ?? 0;
           prefixSums.set(currSum, 1 + (prefixSums.get(currSum) ?? 0));
        }

        return count;
    }
}
