class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */
    kClosest(points, k) {
        const eucDistance = (point) => {
            // console.log(2**2);
            return Math.sqrt((point[0] - 0)**2 + (point[1] - 0)**2);
        }

        let maxDistance = 0
        const minHeap = new MinPriorityQueue((item) => item[1]);

        for(const point of points) {
            const distance = eucDistance(point);
            maxDistance = distance > maxDistance ? distance : maxDistance;
            minHeap.enqueue([point, distance]);
            
        }

        // console.log(distFromOrigin);
        const closest = [];
        for (let curr = 0; curr < k; curr++){
           closest.push(minHeap.dequeue()[0]);
        }
        return closest;
    }
}
