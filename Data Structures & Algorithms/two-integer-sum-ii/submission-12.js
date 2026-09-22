class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let i = 0; 
        let j = numbers.length - 1;
        let ans = [];
        while(i < j){
            let sum = numbers[i] + numbers[j];
            if(sum == target){
                ans.push(i + 1);
                ans.push(j + 1);
                break;
            } else if(sum < target){
                i++;
            } else {
                j--;
            }
        }
        return ans;
    }
}
