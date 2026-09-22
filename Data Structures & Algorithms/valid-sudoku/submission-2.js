class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        let rows = Array.from({length: board.length}, () => new Set());
        let columns = Array.from({length: board[0].length}, () => new Set());
        let boxes = Array.from({length: board.length}, () => new Set());
        let boxIndex = 0;
        let isValid = true;
        for(let i =0; i < board.length && isValid; i++){
            for(let j = 0; j < board[i].length && isValid; j++) {
                boxIndex = this.calculateBoxIndex(i, j);
                let val = board[i][j];
                
                if(val == "."){
                    continue;
                } 
                if (rows[i].has(val) || columns[j].has(val) || boxes[boxIndex].has(val)){
                    isValid = false
                }
                rows[i].add(val);
                columns[j].add(val);
                boxes[boxIndex].add(val);
            }
        }
        return isValid;
    }

    calculateBoxIndex(row, column){
        return Math.floor(row / 3) * 3 + Math.floor(column / 3);
    }
}
