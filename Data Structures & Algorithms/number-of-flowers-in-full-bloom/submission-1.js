class Solution {
    /**
     * @param {number[][]} flowers
     * @param {number[]} people
     * @return {number[]}
     */
    fullBloomFlowers(flowers, people) {
        people = people.map((item, i) => [item, i]).sort((a,b)=> a[0] - b[0]);
        const startHeap = new Heap();
        const endHeap = new Heap();
        for(const flower of flowers){
            startHeap.push(flower[0]);
            endHeap.push(flower[1]);
        }
        console.log("People: ", people, "Heaps: ", startHeap, endHeap);
        const counts = Array(people.length).fill(0);
        let count = 0;
        for(const p of people){
            while(startHeap.size() > 0 && startHeap.peek() <= p[0]){
                startHeap.pop();
                count++;
            }
            while(endHeap.size() > 0 && endHeap.peek() < p[0]){
                endHeap.pop();
                count--;
            }
            counts[p[1]] = count;
        }


        return counts;
    }
}

class Heap {
    constructor() {
        this.heap = [];
    }
    size(){
        return this.heap.length;
    }
    push(val){
        this.heap.push(val);
        let child = this.heap.length - 1;
        while(child > 0){
            let parent = Math.floor((child-1)/2);
            if(this.heap[parent] <= this.heap[child]) break;
            [this.heap[parent], this.heap[child]] = [this.heap[child], this.heap[parent]];
            child = parent;
        }
    }
    peek(){
        return this.heap[0];
    }
    pop() {
        if(this.heap.length == 0) return null;
        if(this.heap.length == 1) return this.heap.pop();

        const min = this.heap[0];
        this.heap[0] = this.heap.pop();
        let parent = 0;
        while(true){

            let l = 2 * parent + 1;
            let r = 2 * parent + 2;
            let s = parent;
            if(l < this.heap.length && this.heap[l] < this.heap[s]){
                s = l;
            }
            if(r < this.heap.length && this.heap[r] < this.heap[s]){
                s = r;
            }
            if(s == parent){
                break;
            }
            [this.heap[parent], this.heap[s]] = [this.heap[s], this.heap[parent]];
            parent = s;
        }
        return min;
    }
}
