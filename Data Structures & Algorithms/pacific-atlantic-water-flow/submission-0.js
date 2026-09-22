class Solution {
    /**
     * @param {number[][]} heights
     * @return {number[][]}
     */
    ROWS = 0;
    COLS = 0;
    pacificAtlantic(heights) {
        this.ROWS = heights.length;
        this.COLS = heights[0].length;

        const pacific = Array.from({ length: this.ROWS }, () => 
                  Array(this.COLS).fill(false));

        const atlantic = Array.from({ length: this.ROWS }, () => 
                  Array(this.COLS).fill(false));

        
        for(let c = 0; c < this.COLS; c++){
            this.checkPath(heights, 0, c, pacific);
            this.checkPath(heights, this.ROWS -1, c, atlantic);
        }
        for(let r = 0; r < this.ROWS; r++){
            this.checkPath(heights, r, 0, pacific);
            this.checkPath(heights, r, this.COLS -1, atlantic);
        }
        const ans = [];
        for(let i =0; i < this.ROWS; i++){
            for(let j = 0; j < this.COLS; j++){
                if(atlantic[i][j] && pacific[i][j]){
                    ans.push([i,j]);
                }
            }
        }
        return ans;
    }
    checkPath(heights, r, c, ocean){
        ocean[r][c] = true;
        let directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];
        for(const dir of directions){
            // console.log("dir: ", dir, r, c);
            const row = r + dir[0];
            const col = c + dir[1];
            if(row >= 0 && row < this.ROWS && col >= 0 && col < this.COLS && heights[row][col] >= heights[r][c] && ocean[row][col] == false){
                this.checkPath(heights, row, col, ocean);
            }
        }
    }
}
