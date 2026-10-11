class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums = nums.sort((a,b) => a - b);
        let results = [];

        // console.log("sorted: ", nums);
        for(let i = 0; i < nums.length; i++){
           if(nums[i] > 0){
            break;
           }
           if(i > 0 && nums[i] === nums[i - 1]) {
            continue;
           }
           let l = i + 1;
           let r = nums.length - 1;

           while(l < r) {
            const sum = nums[i] + nums[l] + nums[r];
            if(sum > 0){
                r--;
                // console.log("move right");
            } else if(sum < 0){
                l++;
            } else {

                results.push([nums[i],nums[l],nums[r]]);
                l++;
                r--;
                while(l < r && nums[l] === nums[l - 1]){
                    l++;
                }
            }
           }
        }
        return results;
    }
}
