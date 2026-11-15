class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    smallestDistancePair(nums, k) {
        const pairCounter = (maxDistance) => {
            let l = 0;
            let pairs = 0;
            for(let r = 0; r < nums.length; r++){
                while(nums[r] - nums[l] > maxDistance){
                    l++;
                }
                pairs += r - l;
            }
            return pairs;
        }
        nums.sort((a, b) => a - b);
        console.log("nums: ", nums)
        let left = 0;
        let right = nums[nums.length - 1];
        while(left < right){
            let m = left + Math.floor((right - left)/2);
            const numsOfPairs = pairCounter(m);
            if(numsOfPairs >= k){
                right = m;
            } else {
                left = m + 1;
            }
        }
        return right;
    }
}
