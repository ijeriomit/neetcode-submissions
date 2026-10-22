class Solution {
    nextPalindrome(num) {

        let l = null, r = null;
        // console.log("Before num: ", num);
        const max = num.length % 2 == 0 ? num.length/2 - 1 : Math.floor(num.length/2) - 1;
        const arr = num.substring(0, max + 1).split("");
        
        let pivot = arr.length - 2;
        while (pivot >= 0 && arr[pivot] >= arr[pivot + 1]) {
            pivot--;
        }
        if(pivot < 0) {
            return '';
        }
        let i = max
        while (arr[i] <= arr[pivot]){
            i--;
        }
        let temp = arr[i];
        arr[i] = arr[pivot];
        arr[pivot] = temp;
        
        for(let left = pivot + 1, right = max; left < right; left++, right--){
            [arr[left], arr[right]] = [arr[right], arr[left]];
        }
        
        const rightHalf = arr.toReversed();
        if(num.length % 2 != 0){
            arr.push(num[Math.floor(num.length/2)]);
        }
        arr.push(...rightHalf);
       
        const ans = arr.join("");
        
        return ans == num ? "" : ans;
    }
}
