class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let start = 0;
        let end = heights.length -  1 ;
        let maxArea = 0;
        while(start < end){
            let startHeight = heights[start];
            let endHeight = heights[end];
            let area = Math.min(startHeight, endHeight) * (end - start);
            if(endHeight > startHeight){
                start += 1;
            } else{
                end -= 1;
            }
            maxArea = Math.max(maxArea, area);
        }
        return maxArea;
    }
}
