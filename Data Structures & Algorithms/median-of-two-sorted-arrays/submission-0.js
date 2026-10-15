class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1, nums2) {
       let a = nums1, b = nums2;
       let size = nums1.length + nums2.length;
       let half = Math.floor(size/2);

       if(b.length < a.length){
            let temp = a;
            a = b;
            b = temp;
       }
       let l = 0, r = a.length - 1;
       while(true) {
        let i = Math.floor((l + r) / 2);
        let j = half - i - 2;

        let aLeft = i >= 0 ? a[i] : -Infinity;
        let aRight = (i + 1) < a.length ? a[i + 1] : Infinity;
        let bLeft = j >= 0 ? b[j] : -Infinity;
        let bRight = (j + 1) < b.length ? b[j + 1] : Infinity;

        if(aLeft <= bRight && bLeft <= aRight){
            if (size % 2 != 0) {
                return Math.min(aRight, bRight);
            }
            return (Math.max(aLeft, bLeft) + Math.min(aRight, bRight)) / 2
        } else if(aLeft > bRight) {
            r = i - 1;
        } else {
            l = i + 1;
        }
      }
    }
}
