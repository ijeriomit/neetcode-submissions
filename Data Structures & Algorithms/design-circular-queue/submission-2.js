class QueueNode {
    constructor(val, next = null){
        this.val = val;
        this.next = next;
    }
}

class MyCircularQueue {
    /**
     * @param {number} k
     */
    constructor(k) {
        this.capacity = k;
        this.size = 0;
        this.head = null;
        this.tail = null;
        // console.log("cap: ", k);
    }

    /**
     * @param {number} value
     * @return {boolean}
     */
    enQueue(value) {
        if(this.isFull()){
            return false;
        }
        const newNode = new QueueNode(value);
        
        if(this.isEmpty()) {
            this.head = newNode;
            this.tail = this.head;
            this.tail.next = null;
        } else {
            this.tail.next = newNode;
            this.tail = this.tail.next;
            this.tail.next = this.head;
        }
        this.size +=1;
        return true;
    }

    /**
     * @return {boolean}
     */
    deQueue() {
        if(this.isEmpty()){
            return false;
        }

        this.head = this.head.next;
        this.tail.next = this.head;

        if(this.head == null){ // tail reached head node
            this.tail = this.head;
        }
        this.size -= 1;
        // console.log("Dequeue: ", this.head, this.tail, this.size);
        return true;
    }

    /**
     * @return {number}
     */
    Front() {
        return this.head?.val ?? -1;
    }

    /**
     * @return {number}
     */
    Rear() {
        return this.tail?.val ?? -1;
    }

    /**
     * @return {boolean}
     */
    isEmpty() {
        return this.size == 0;
    }

    /**
     * @return {boolean}
     */
    isFull() {
        return this.size == this.capacity;
    }
}

/**
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */
