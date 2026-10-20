class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        const islandSet = new Set();
        let num = 0;
        const rowBound = grid.length;
        const colBound = grid[0].length;
        const posToString = (x,y) => `${x},${y}`;
        const traverse = (row, col) => {
            if(row < 0 || col < 0 || row >= rowBound || col >= colBound || grid[row][col] == '0' || islandSet.has(posToString(row, col))){
                return;
            }
            // console.log("add position: ", posToString(row, col));
            islandSet.add(posToString(row, col));
            traverse(row+1, col);
            traverse(row, col + 1);
            traverse(row-1, col);
            traverse(row, col - 1);
        }

        for(let i =0; i < rowBound; i++){
            for(let j = 0; j < colBound; j++){
                if(grid[i][j] == "1" && !islandSet.has(posToString(i, j))){
                    traverse(i,j);
                    num++;
                }
            }
        }
        return num;
    }
}
