class Solution {
    /**
     * @param {number[][]} matrix
     * @return {void}
     */
    rotate(matrix) {
        for(let row = 0; row < matrix.length; row++){
            for(let col = row + 1; col < matrix[0].length; col++){
                const temp = matrix[row][col];
                matrix[row][col] = matrix[col][row];
                matrix[col][row] = temp;
            }
        }

        for(let row = 0; row < matrix.length; row++){

            matrix[row].reverse();
        }
        // console.log(cols);
    }

}
