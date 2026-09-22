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
        let topRow = 0;
        let bottomRow = matrix.length - 1;
        const rowEnd = matrix[0].length - 1;
        let targetRow = null;
        while(topRow <= bottomRow){
           const midRow = Math.floor((topRow + bottomRow)/2);
           if(matrix[midRow][0] <= target && matrix[midRow][rowEnd] >= target){
                targetRow = midRow;
                break;
           } else if(matrix[midRow][rowEnd] < target) {
                topRow += 1;
           } else {
                bottomRow -= 1;
           }
        }

        if(targetRow != null){
            targetFound = binarySearch(matrix[targetRow], target);        
        }
        return targetFound;
        // for(let row = 0; row < matrix.length && !targetFound; row++){
        //     let rowEnd = matrix[row].length - 1
        //     if(target == matrix[row][rowEnd]){
        //         targetFound = true;
        //     } else if(target <= matrix[row][rowEnd]){
        //         targetFound = binarySearch(matrix[row], target);
        //     }
        // }
        return targetFound;
    }
}
