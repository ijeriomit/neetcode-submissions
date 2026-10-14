class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    missingElement(nums, k) {

        let left = 0;
        let right = nums.length - 1;
        let ans = -1;
        while(left < right){
            const mid = Math.ceil((right + left)/2);
            let missing = nums[mid] - nums[0] - mid;
            if(missing < k){
                left = mid;
            } else {
                right = mid - 1;
            }
        }
        console.log("left: ", left);
        return nums[0] + k + left
    }
}
