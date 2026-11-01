
class Heap {
    constructor(key, isMinHeap=false){
        this.heap = [];
        this.key = key;
        this.isMinHeap = isMinHeap
    }

    getValue(item){
        return item[this.key];
    }
    peek() {
        if(this.heap.length == 0){
            return null;
        }
        return this.isMinHeap
    ? { ...this.heap[0], [this.key]: -this.heap[0][this.key] }
: this.heap[0];

    }
    isEmpty(){
        return this.heap.length == 0;
    }
    push(value) {
        this.heap.push(
            this.isMinHeap
                ? { ...value, [this.key]: -value[this.key] }
                : value
        );        
        let child = this.heap.length - 1; //new node index
        while(child > 0) {
            const parent = Math.floor((child - 1) / 2);
            if(this.getValue(this.heap[parent]) >= this.getValue(this.heap[child])){
                break;
            } else {
                [this.heap[parent], this.heap[child]] = [this.heap[child], this.heap[parent]];
                child = parent;
            }
        }
    }

    pop(){
        if(this.heap.length == 0){
            return null;
        }
        const root = this.isMinHeap
    ? { ...this.heap[0], [this.key]: -this.heap[0][this.key] }
    : this.heap[0];
        if(this.heap.length == 1){
            this.heap.pop();
            return root;
        }
        
        this.heap[0] = this.heap.pop();
        let parent = 0;

        while(true){
            const left = (2 * parent) + 1;
            const right = (2 * parent) + 2;

            let largest = parent;

            if(left < this.heap.length && this.getValue(this.heap[left]) > this.getValue(this.heap[largest])){
                largest = left;
            }
            if(right < this.heap.length && this.getValue(this.heap[right]) > this.getValue(this.heap[largest])){
                largest = right;
            }
            if(largest == parent){
                break;
            } 
            [this.heap[largest], this.heap[parent]] = [this.heap[parent], this.heap[largest]];

            parent = largest;

        }
        return root;
    }
}
class Solution {
    /**
     * @param {number} k
     * @param {number} w
     * @param {number[]} profits
     * @param {number[]} capital
     * @return {number}
     */
    findMaximizedCapital(k, w, profits, capital) {
        const profitsHeap = new Heap("profit");
        const capitalHeap = new Heap("capital", true);

        for(let i = 0; i < profits.length; i++) {
            capitalHeap.push({profit: profits[i], capital: capital[i]});
        }
        // console.log(projects);

        for(let i = 0; i < k; i++){
            while(!capitalHeap.isEmpty() && capitalHeap.peek().capital <= w){
                profitsHeap.push(capitalHeap.pop());
            }
            if(profitsHeap.isEmpty()){
                break;
            }
            w += profitsHeap.pop().profit;
        }

        return w;
    }
}

