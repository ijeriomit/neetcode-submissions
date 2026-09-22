class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let numSet = new Set(nums);
        let seqs = new Map();
        for(const val of numSet){
            if(!numSet.has(val - 1)){ //start of seq
                seqs.set(val, [val]);
                let i = val;
                while(numSet.has(i + 1)){
                    i += 1;
                    seqs.get(val).push(i);
                }
            }
        }
        let longest = 0;
        for(const val of seqs.values()){
            if(longest < val.length){
                longest = val.length;
            }
        }
        return longest;
    }
}
