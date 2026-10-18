class Solution {
    /**
     * @param {number[]} candidates
     * @param {number} target
     * @return {number[][]}
     */
    combinationSum2(candidates, target) {
        candidates.sort((a,b) => a-b);
        const result = [];
        const combo = [];
        const traverse = (i, sum) => {

            if(sum == target){
                result.push([...combo]);
                return;
            }

            if(i > candidates.length - 1 || sum > target){
                return;
            }
            
            sum += candidates[i];
            combo.push(candidates[i]);

            traverse(i+1, sum);
            
            sum -= candidates[i];
            combo.pop();

            while(i < candidates.length && candidates[i] == candidates[i+1] ){
                i++;
            }
            traverse(i+1, sum);
        }
        traverse(0,0);
        return result;
    }
}
