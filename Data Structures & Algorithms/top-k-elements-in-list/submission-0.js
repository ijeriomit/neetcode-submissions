class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let freqMap = new Map();
        let freqList = [];
        let mostFreq = new Set();

        if(nums.length <= k){
            return nums;
        }
        for(let i = 0; i <= nums.length; i++){
            freqList.push([]);
        }
        for(let i = 0; i < nums.length; i++) {
            if(freqMap.has(nums[i])) {
                let freq = freqMap.get(nums[i]) + 1;
                freqMap.set(nums[i], freq);
                freqList[freq].push(nums[i]);
            } else {
                freqMap.set(nums[i], 1);
                freqList[1].push(nums[i]);
            }
        }
        console.log("freq:", freqList);
        for(let i = freqList.length - 1; i > 0; i--) {
            if(freqList[i].length != 0) {
                for(let j = 0; j < freqList[i].length; j++) {
                    if(mostFreq.size < k) {

                        mostFreq.add(freqList[i][j])
                    } else {
                        break;
                    }
                }
            }       
            if(mostFreq.size == k){
                break;
            }
        }
        return [...mostFreq];
    }
}
