class Solution {
    /**
     * @param {number[]} gifts
     * @param {number} k
     * @return {number}
     */
    pickGifts(gifts, k) {
        const maxHeap = new MaxPriorityQueue(); 

        for(const gift of gifts) {
            maxHeap.enqueue(gift);
        }
        for(let i =0; i < k; i++){
            const gift = Math.floor(Math.sqrt(maxHeap.dequeue()));
            maxHeap.enqueue(gift);
        }

        return maxHeap.toArray().reduce((acc, curr) => acc + curr, 0);
        
    }
}
