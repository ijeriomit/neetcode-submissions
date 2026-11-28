class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const ans = new Map();
        for(let i = 0; i < strs.length; i++){
            const count = new Array(26).fill(0);
            for(let char of strs[i]) {
                count[char.charCodeAt(0) - 'a'.charCodeAt(0)] += 1;
            }
            const key = count.join();
            if(!ans.has(key)){
                ans.set(key, [strs[i]]);
            } else {
                ans.get(key).push(strs[i]);
            }
        }

        return [...ans.values()];
    }
}
