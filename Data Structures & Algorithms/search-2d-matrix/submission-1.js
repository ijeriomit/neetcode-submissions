class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let targetFound = false;
        const binarySearch = (array, t) => {
            let l = 0;
            let r = array.length - 1;
            let found = false;
            while(l <= r){
                let mid = Math.floor((l+r)/2)
                if(array[mid] == t){
                    found = true;
                    break;
                } else if(array[mid] < t){
                    l += 1;
                } else {
                    r -=1;
                }
            }
            return found;
        }
        for(let row = 0; row < matrix.length && !targetFound; row++){
            let rowEnd = matrix[row].length - 1
            if(target == matrix[row][rowEnd]){
                targetFound = true;
            } else if(target <= matrix[row][rowEnd]){
                targetFound = binarySearch(matrix[row], target);
            }
        }
        return targetFound;
    }
}
