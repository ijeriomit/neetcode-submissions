class Solution {
    /**
     * @param {number[][]} matrix
     * @return {void}
     */
    rotate(matrix) {
        // const dummy = Array.from( { length: matrix.length },() => Array(matrix[0].length).fill(0));
        // console.log(dummy);

        const cols = [];

        
        for(let col = 0; col < matrix[0].length; col++){
            cols.push([])
            for(let row =0; row < matrix.length; row++){
                cols[col].push(matrix[row][col]);
                // console.log( 
            }
            cols[col].reverse();
        }
        
        for(let row = 0; row < matrix.length; row++){
            for(let col =0; col < matrix[0].length; col++){
                matrix[row][col] = cols[row][col];
            }
        }
        console.log(cols);
    }
}
