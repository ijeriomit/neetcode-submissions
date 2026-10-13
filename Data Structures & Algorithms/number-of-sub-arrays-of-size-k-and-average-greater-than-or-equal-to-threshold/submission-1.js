class Solution {
    /**
     * @param {number[]} arr
     * @param {number} k
     * @param {number} threshold
     * @return {number}
     */
    numOfSubarrays(arr, k, threshold) {

        let num = 0;
        for(let i = 0; i <= arr.length - k; i++){
            let sum = 0;
            // if(arr[i] >= threshold){
            //     let remaining = (arr.length - i);
            //     sum += ( remaining / k) + (remaining )
            // }
            for(let j = i; j < i + k; j++){
                sum += arr[j];
            }
            let avg = sum / k;
            if(avg >= threshold){
                num += 1;
            }
        }

        return num;
    }
}
