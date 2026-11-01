class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        const freqMap = new Map();
        let l = 0;
        let maxLen = 0;
        let maxF = 0;
        for(let r = 0; r < s.length; r++){
            freqMap.set(s[r], (freqMap.get(s[r]) ?? 0) + 1);
            maxF = Math.max(maxF, freqMap.get(s[r]));

            while(r - l + 1 - maxF > k){
                freqMap.set(s[l], freqMap.get(s[l]) - 1);
                l++;
            }
            maxLen = Math.max(maxF, r - l + 1);
        }

        return maxLen;
    }
}
