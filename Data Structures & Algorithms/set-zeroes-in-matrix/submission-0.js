class Solution {
    /**
     * @param {number[][]} matrix
     * @return {void}
     */
    setZeroes(matrix) {

        const rows = new Set();
        const cols = new Set();
        for(let i =0; i < matrix.length; i++){
            for(let j = 0; j < matrix[0].length; j++){
                if(matrix[i][j] == 0){
                    rows.add(i);
                    cols.add(j);
                }
            }
        }
        // console.log(rows, cols);

        for(let i=0; i < matrix.length; i++){
            for(let j = 0; j < matrix[0].length; j++){
                if(rows.has(i) || cols.has(j)){
                    matrix[i][j] = 0;
                }
            }
        }
    }
}
