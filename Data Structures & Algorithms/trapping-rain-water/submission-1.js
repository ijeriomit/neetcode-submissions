class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(heights) {
        let maxArea = 0;

        let l = 0;
        let r = heights.length - 1;

        let maxL = heights[l];
        let maxR = heights[r];
        while( l < r){
            if(maxL <= maxR){
                l++;
                maxL = Math.max(heights[l], maxL);
                maxArea += maxL - heights[l];
            } else {
                r--;
                maxR = Math.max(heights[r], maxR);
                maxArea += maxR - heights[r];
            }
        }
        return maxArea;
    }
}
