class Solution {
    /**
     * @param {number} n
     * @param {number} k
     * @return {number[][]}
     */
    combine(n, k) {
        const result = [];
        let combo = [];
        const traverse = (curr) => {
            if(combo.length == k) {
                result.push([...combo]);
            }

            for(let i = curr; i <= n; i++){
                combo.push(i);
                traverse(i+1);
                combo.pop();
            }

        }
        traverse(1);
        return result;
    }
}
