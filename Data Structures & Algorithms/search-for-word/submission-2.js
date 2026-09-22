class Solution {
    /**
     * @param {character[][]} board
     * @param {string} word
     * @return {boolean}
     */
    exist(board, word) {
        const rowLen = board.length;
        const colLen = board[0].length;
        const path = new Set();
        function dfs(row, col, i) {
            // console.log("letters: ", row, col, tracker, word, path);
            if(i == word.length){
                return true;
            }
            if(row >= rowLen || col >= colLen || col < 0 || row < 0 || board[row][col] !== word[i] || path.has(`${row}${col}`)) {
                return false;
            }
            path.add(`${row}${col}`);
            const res = dfs(row, col - 1, i + 1) || dfs(row - 1, col, i + 1) || dfs(row, col + 1, i + 1) || dfs(row + 1, col, i + 1);
            path.delete(`${row}${col}`);

            return res;
        }
        for(let i = 0; i < rowLen; i++){
            for(let j = 0; j < colLen; j++){
                if(dfs(i, j, 0)){
                    return true;
                }
            }
        }
        return false;
    }


}
