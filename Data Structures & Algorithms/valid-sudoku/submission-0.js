class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        // const rowSet = new Set();
        // const colSet = new Set();
        const rowSets = [];
        const colSets = [];
        const boardSets = [];
        for(let i = 0; i < board.length; i++){
            rowSets.push(new Set());
            colSets.push(new Set());
            boardSets.push(new Set());
        }

        // rowSets[0].add("1");
        // console.log(rowSets[0]);

        for(let i = 0; i < board.length; i++){
            for(let j = 0; j < board[0].length; j++){
                const square = board[i][j];
                // console.log(square);
                if(square == "."){
                    continue;
                }
                const k = this.getBoard(i, j);
                if(rowSets[i].has(square) || colSets[j].has(square) || boardSets[k].has(square)){
                    return false;
                } else {
                    rowSets[i].add(square);
                    colSets[j].add(square);
                    boardSets[k].add(square);
                }
            }
        // console.log("sets: ", rowSets, colSets);
        }
        return true;
    }
    getBoard(row, col){
        // console.log("bo/ard: ", Math.floor(row/3) * 3 + Math.floor(col/3), (row/3) * 3 + (col/3), row, col);
        return Math.floor(row/3) * 3 + Math.floor((col/3));
    }
}
