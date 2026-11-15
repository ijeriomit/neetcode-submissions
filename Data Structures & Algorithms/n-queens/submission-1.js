class Solution {
    /**
     * @param {number} n
     * @return {string[][]}
     */
    solveNQueens(n) {
        const boards = [];
        const colSet = new Set();
        const posDiagSet = new Set();
        const negDiagSet = new Set();
        const board = Array.from({ length: n }, () => Array(n).fill("."));
        
        const backtrack = function(r){
            if(r === n){
                boards.push(board.map((row) => row.join('')));
                return;
            }

            for(let c = 0; c < n; c++){
                if(colSet.has(c) || posDiagSet.has(r + c) || negDiagSet.has(r - c))             {
                    continue;
                }

                colSet.add(c);
                posDiagSet.add(r + c);
                negDiagSet.add(r - c);
                board[r][c] = "Q";

                backtrack(r + 1);

                colSet.delete(c);
                posDiagSet.delete(r + c);
                negDiagSet.delete(r - c);
                board[r][c] = '.';

            }
        }
       backtrack(0);
       return boards;
    }
}
