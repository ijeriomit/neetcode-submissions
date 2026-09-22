class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */
    kClosest(points, k) {
    
        points.sort((a,b) => {
            return this.calculateDistance(a) - this.calculateDistance(b);
        });
        return points.slice(0, k);
    }

    calculateDistance(point){
        return Math.abs(Math.sqrt(Math.pow(point[0], 2) + Math.pow(point[1], 2)));
    }
}
