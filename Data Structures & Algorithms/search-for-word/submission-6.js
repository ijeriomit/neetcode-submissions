class Solution {
    /**
     * @param {character[][]} board
     * @param {string} word
     * @return {boolean}
     */
    exist(board, word) {
        
        // const freqMap = new Map();
        let found = false;
        const rowBound = board.length;
        const colBound = board[0].length;
        const traverse = (x, y, curr, visited) => {
            const key = `${x},${y}`;
            if (
                x < 0 ||
                x >= rowBound ||
                y < 0 ||
                y >= colBound ||
                visited.has(key)
            ) {
                return;
            }
            if(board[x][y] !== curr[0]){
                return;
            }
            curr = curr.slice(1);
            if(curr == ""){
                found = true;
                return;
            }
            visited.add(key);

            // console.log("new word: ", curr == '', "visited: ", visited.keys());
            traverse(x-1, y, curr, visited);
        
            traverse(x + 1, y, curr, visited);
        
            traverse(x, y - 1, curr, visited);
        
            traverse(x, y + 1, curr, visited)
        
            visited.delete(key);
        };
       

        for(let row = 0; row < rowBound && !found; row++){
            for(let col = 0; col < colBound && !found; col++) {
                // console.log(word[0]);
                if(board[row][col] == word[0]){
                    // console.log("looking for word: ", word);
                   traverse(row, col, word, new Set());
                }
            }
        }

        return found;
    }
}
