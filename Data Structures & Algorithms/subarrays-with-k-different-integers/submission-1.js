class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    subarraysWithKDistinct(nums, k) {
        const map = new Map();
        let num = 0;
        for(let [slow, mid, fast] = [0, 0, 0]; fast < nums.length; fast++){
            map.set(nums[fast], (map.get(nums[fast]) ?? 0) + 1);

            while(map.size > k) {
                 // window too large 
                map.set(nums[mid], map.get(nums[mid]) - 1);
                if(map.get(nums[mid]) == 0)
                    map.delete(nums[mid])
                mid++;
                slow = mid; 
            }
            while (map.get(nums[mid]) > 1) {
                map.set(nums[mid], map.get(nums[mid]) - 1);
                mid++;
            } 
            if(map.size == k){
                //a window
                num += (mid - slow) + 1; 
            } 

        }

        return num;

    }
}
