class FreqStack {
    constructor() {
        this.stack = [];
        this.freqPosMap = new Map();

    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.stack.push(val);
        let data = null;
        if(this.freqPosMap.has(val)){
            data = this.freqPosMap.get(val);
            data.freq++;
            data.positions.push(this.stack.length -1);
        } else {
            data = {freq: 1, positions:[this.stack.length -1]}
        }
        this.freqPosMap.set(val, data);
    }

    /**
     * @return {number}
     */
    pop() {
        let max = [null, -1];
        for(let i = this.stack.length -1; i >= 0; i--) {
            const num = this.stack[i];
            let data  = this.freqPosMap.get(num);
            if(data.freq > max[1]){
                max = [num, data.freq];
            }
        }
        const data = this.freqPosMap.get(max[0]);

        data.freq--;
        const popped = data.positions.pop();
        // console.log("Stack: ", this.stack);
        this.stack.splice(popped, 1);
        // console.log("max: ", max, "data: ", data, "stack: ", this.stack);
        this.freqPosMap.set(max[0], data);
        return max[0];
    }
}

/**
 * Your FreqStack object will be instantiated and called as such:
 * var obj = new FreqStack()
 * obj.push(val)
 * var param_2 = obj.pop()
 */
