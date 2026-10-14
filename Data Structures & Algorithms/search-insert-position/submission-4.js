class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    searchInsert(nums, target) {

        let left = 0;
        let right = nums.length -1;
        let mid = Math.floor((right + left)/2);
        let result = nums.length;
        while(left <= right) {
            mid = Math.floor((right + left)/2);
            if(target < nums[mid]){
                result = mid;
                right = mid - 1;
            } else if(target > nums[mid]){
                left = mid + 1;
            } else {
                return mid;
                // result = mid;
                // break;
            }
        }
        // console.log("result: ", result, mid);
        // if(mid == 0){
        //     result = nums[mid] > target ? mid : mid + 1;
        // }
        // if(result == -1){
        //     result = target < nums[mid] ? mid - 1 : mid + 1;
        // }
    
        return result;
    }
}
