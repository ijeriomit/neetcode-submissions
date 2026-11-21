class Solution {
    /**
     * @param {number[][]} matrix
     * @return {number[]}
     */
    spiralOrder(matrix) {
        const ans = [];
        if (!matrix.length || !matrix[0].length) return ans;
        const ansLen = matrix.length * matrix[0].length;
        let rBound = matrix[0].length - 1;
        let lBound = 0;
        let tBound = 0;
        let bBound = matrix.length - 1;
        let r = 0;
        let c = 0;
        let dir = 0; // 0: right, 1: down, 2: left, 3: up
        while (ans.length != ansLen) {
            ans.push(matrix[r][c]);
            if (ans.length === ansLen) break;
            if (dir === 0) { // moving right
                if (c === rBound) {
                    dir = 1;
                    tBound += 1;
                    r++;
                } else {
                    c++;
                }
            } else if (dir === 1) { // moving down
                if (r === bBound) {
                    dir = 2;
                    rBound -= 1;
                    c--;
                } else {
                    r++;
                }
            } else if (dir === 2) { // moving left
                if (c === lBound) {
                    dir = 3;
                    bBound -= 1;
                    r--;
                } else {
                    c--;
                }
            } else if (dir === 3) { // moving up
                if (r === tBound) {
                    dir = 0;
                    lBound += 1;
                    c++;
                } else {
                    r--;
                }
            }
        }
        return ans;
    }
}
