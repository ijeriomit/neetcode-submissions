class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsetsWithDup(nums) {
        let subsets = [];
        let currSubset = [];
        nums.sort();
        this.traverse(0, currSubset, subsets, nums);

        return subsets;
    }
    traverse(index, curr, subsets, arr){
        // console.log(index, curr, subsets, arr);
        if(index == arr.length){
            subsets.push([...curr]);
            return;
        }
        curr.push(arr[index]);
        this.traverse(index + 1, curr, subsets, arr);
        curr.pop();
        while(index + 1 < arr.length && arr[index] == arr[index + 1]) {
            index++;
        }
        this.traverse(index + 1, curr, subsets, arr);
    }
}
