class Solution {
    /**
     * @param {number} k
     * @param {number[]} speed
     * @param {number[]} efficiency
     * @return {number}
     */
    maxPerformance(n, speed, efficiency, k) {
       const seList = speed.map((item, i) => {
        return {speed: item, eff: efficiency[i]};
       }).sort((a,b) => {
        return b.eff - a.eff;
       });
       const heap = new MyHeap();
       let maxP = 0n;
       for(let i = 0; i < seList.length; i++) {
            if(heap.size() == k){
                heap.pop();
            }
            heap.push(seList[i]);
            const currentP = BigInt(seList[i].eff) * BigInt(heap.getSum());
            if (currentP > maxP) {
                maxP = currentP;
            }
        }
        return Number(maxP % 1000000007n);
    }
}

class MyHeap {
    constructor(minHeap=true){
        this.minHeap = minHeap;
        this.heap = [];
        this.sum = 0;
    }
    size() {
        return this.heap.length;
    }
    push(val){
        this.heap.push(val);
        this.sum += val.speed;
        let child = this.heap.length - 1;
        while (child > 0) {
            const parent = Math.floor((child - 1)/2);
            if(this.heap[parent].speed <= this.heap[child].speed){
                break;
            }
            [this.heap[parent], this.heap[child]] = [this.heap[child], this.heap[parent]];
            child = parent;
        }

    }
    getSum() {
        return this.sum;
    }
    peek() {
        return this.heap.length > 0 ? this.heap[0] : null;
    }
    pop(){
        if(this.heap.length == 0){
            return null;
        } if(this.heap.length == 1){
            this.sum -= this.heap[0].speed;
            return this.heap.pop();
        }

        this.sum -= this.heap[0].speed;
        const min = this.heap[0];
        this.heap[0] = this.heap.pop();

        let parent = 0;
        while(true) {
            const l = 2 * parent + 1;
            const r = 2 * parent + 2;
            let s = parent;

            if(l < this.heap.length && this.heap[l].speed < this.heap[s].speed) {
                s = l;
            }
            if(r < this.heap.length && this.heap[r].speed < this.heap[s].speed) {
                s = r
            }
            if(s === parent) break;
            [this.heap[parent], this.heap[s]] = [this.heap[s], this.heap[parent]];
            parent = s;
        }

        return min;
    }
}
