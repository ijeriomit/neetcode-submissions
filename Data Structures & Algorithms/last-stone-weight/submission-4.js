class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones) {
        const maxHeap = new MaxPriorityQueue();
        for(const stone of stones) {
            maxHeap.enqueue(stone);
        }
        while(maxHeap.size() > 1){
            const stone1 = maxHeap.dequeue();
            const stone2 = maxHeap.dequeue();
            if(stone1 !== stone2){
                 maxHeap.enqueue(stone1 - stone2);
            }
        }
        return maxHeap.size() === 1 ? maxHeap.dequeue() : 0;
    }
}
