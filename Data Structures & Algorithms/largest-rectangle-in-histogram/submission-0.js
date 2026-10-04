class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
        let maxArea = 0;
        let stack = [];
        for(let i =0; i < heights.length; i++){
            let height = heights[i];

            let index = i;
            while(stack.length > 0 && height < stack[stack.length - 1].height) {
                let stackTop = stack.pop();
                index = stackTop.index;
                maxArea = this.calculateMaxArea(stackTop.height, index, i, maxArea);

            }
            stack.push({height: height, index: index});
        }

        while(stack.length > 0){
            let stackTop = stack.pop();
            maxArea = this.calculateMaxArea(stackTop.height, stackTop.index, heights.length, maxArea);
        }

        return maxArea;
    }

    calculateMaxArea(height, start, end, maxArea){
        let area = height * (end - start);
        return area > maxArea ? area : maxArea;
    }
}
