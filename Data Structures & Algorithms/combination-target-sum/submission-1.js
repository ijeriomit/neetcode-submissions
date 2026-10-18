class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        nums.sort((a,b)=> a-b);
        const result = [];
        const subset = [];
        const traverse = (sum, i) => {
            if(sum > target || i > nums.length - 1){
                return;
            }
            if(sum == target) {
                result.push([...subset]);
                return;
            }
            subset.push(nums[i]);
            sum += nums[i];
            // console.log("Push: ", nums[i], "subset: ", subset, "sum: ", sum);
            traverse(sum, i);

            subset.pop(nums[i]);
            sum -= nums[i];
            // console.log("Pop: ", nums[i], "subset: ", subset, "sum: ", sum);
            
            traverse(sum, ++i);
            
        }

        traverse(0, 0);
        return result;
    }
}
