class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {

        let l = 0, r = height.length - 1, lMax = 0, rMax = 0;
        let rainWater = 0;
        while(r != l) {
            if(height[r] > rMax){
                rMax = height[r];
            }
            if(height[l] > lMax){
                lMax = height[l];
            }
            let water = 0;
            if(lMax <= rMax){
                water = Math.min(rMax, lMax) - height[l];
                l++;
            } else {
                water = Math.min(rMax, lMax) - height[r];
                r--;
            }

            rainWater += water > 0 ? water : 0;
        }

        return rainWater;
    }
}
