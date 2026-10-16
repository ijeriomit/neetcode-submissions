class Heap {
    constructor(minHeap=false){
        this.heap = [];
        this.minHeap = minHeap;
    }
    size(){
        return this.heap.length;
    }

    top(){
        if(this.heap.length === 0) return null;
        return this.minHeap ? this.heap[0] * -1 : this.heap[0];
    }

    insert(val){
        this.heap.push(this.minHeap ? val * -1 : val);
        let child = this.heap.length - 1;
        while(child > 0) {
            let parent = Math.floor((child - 1) / 2);
            if(this.heap[child] <= this.heap[parent]){
                break;
            }
            [this.heap[child], this.heap[parent]] = [this.heap[parent], this.heap[child]];
            child = parent;
        }
    }

    pop() {
        if(!this.heap.length) return null;
        if(this.heap.length === 1) {
            const val = this.heap.pop();
            return this.minHeap ? val * -1 : val;
        }

        const max = this.heap[0];
        this.heap[0] = this.heap.pop();
        let parent = 0;
        while(true) {
            let left = 2 * parent + 1;
            let right = 2 * parent + 2;
            let largest = parent;

            if(left < this.heap.length && this.heap[left] > this.heap[largest]){
                largest = left;
            } 
            if(right < this.heap.length && this.heap[right] > this.heap[largest]) {
                largest = right;
            }
            if(largest == parent) {
                break;
            }
            [this.heap[parent], this.heap[largest]] = [this.heap[largest], this.heap[parent]];
            parent = largest;
        }

        return this.minHeap ? max * -1 : max;
    }
}

class MedianFinder {
    constructor() {
        this.leftPart = new Heap();
        this.rightPart = new Heap(true);
    }

    /**

     * @param {number} num
     * @return {void}
     */
    addNum(num) {
        if(this.rightPart.size() > 0 && num > this.rightPart.top()) {
            this.rightPart.insert(num);
        } else  {
            this.leftPart.insert(num);
        } 
        if(this.partsUnbalanced() && this.leftPart.size() > this.rightPart.size()){
            this.rightPart.insert(this.leftPart.pop());
        } else if(this.partsUnbalanced() && this.rightPart.size() > this.leftPart.size()){
            this.leftPart.insert(this.rightPart.pop());
        }
    }

    partsUnbalanced(){
        return Math.abs(this.leftPart.size() - this.rightPart.size()) > 1;
    }

    getSize(){
        return this.leftPart.size() + this.rightPart.size();
    }

    /**
     * @return {number}
     */
    findMedian() {
        let median = null;
        if(this.getSize() % 2 == 0) {
            median = (this.leftPart.top() + this.rightPart.top()) / 2;
        } else {
            median = this.leftPart.size() > this.rightPart.size() ? this.leftPart.top() : this.rightPart.top();
        }
        return median;
    }
}
