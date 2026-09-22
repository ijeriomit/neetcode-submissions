class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        // piles.sort();
        let left = 0;
        let right = Math.max(...piles);
        let ans = right;
        while(left <= right){
            const k = Math.floor((right + left)/2);
            let eatingTime = 0;
            for(let i = 0; i < piles.length; i++){
                eatingTime += Math.ceil(piles[i]/k);
            }
            if(eatingTime <= h){
                ans = k;
                right = k - 1;
            } else {
                left = k + 1;
            }
        }
        return ans;
    }
}
