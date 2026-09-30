class MinStack {
    constructor() {
        this.stack = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        const min = this.getMin() == null ? val : Math.min(this.getMin(), val) ;
        // console.log("pushing: ", [val, min]);
        this.stack.push([val, min]);
    }

    /**
     * @return {void}
     */
    pop() {
        this.stack.pop();
    }

    /**
     * @return {number}
     */
    top() {
        return this.stack.at(-1)[0];
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.stack.at(-1)?.[1] ?? null;
    }
}
