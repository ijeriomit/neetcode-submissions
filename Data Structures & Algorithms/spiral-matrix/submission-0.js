class Solution {
    /**
     * @param {number[][]} matrix
     * @return {number[]}
     */
    spiralOrder(matrix) {

        let leftBound = 0;
        let rightBound = matrix[0].length;
        let topBound = 0;
        let bottomBound = matrix.length;

        const visited = [];
        

        while(leftBound < rightBound && topBound < bottomBound){
            for(let i = leftBound; i < rightBound; i++){
                visited.push(matrix[topBound][i]);
            }
            topBound++;
            for(let i = topBound; i < bottomBound; i++){
                visited.push(matrix[i][rightBound - 1]);
            }
            rightBound--;
             if (!(leftBound < rightBound && topBound < bottomBound)) {
                break;
            }
            for(let i = rightBound - 1; i >= leftBound; i--){
                visited.push(matrix[bottomBound - 1][i]);
            }
            bottomBound--;
            for(let i = bottomBound - 1; i >= topBound; i--){
                visited.push(matrix[i][leftBound]);
            }
            leftBound++;
        }
        console.log("bounds: ", leftBound, topBound, rightBound, bottomBound);
        return visited;
    }
}
