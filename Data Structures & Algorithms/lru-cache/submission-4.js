class LRUCache {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.left = new ListNode(null, null);
        this.right = new ListNode(null, null);
        this.map = new Map();
        // for(let i =0; i < capacity - 1; i++){
        //     curr.next = new ListNode(null);
        //     curr = curr.next;
        // }
        this.left.next = this.right;
        this.right.prev = this.left;
        this.cap = capacity;
    }
    
    remove(node) {
        const prev = node.prev;
        const next = node.next;
        prev.next = next;
        next.prev = prev;
    }
    insert(node) {
        const prev = this.right.prev;
        prev.next = node;
        node.prev = prev;
        node.next = this.right;
        this.right.prev = node;
    }
    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        if(this.map.has(key)){
            const node = this.map.get(key);
            this.remove(node);
            this.insert(node);
            return node.val;
            // this.updateCache(key, val);
        }
        return -1;
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        if(this.map.has(key)){
            this.remove(this.map.get(key));
        }
        const newNode = new ListNode(key, value);
        this.map.set(key, newNode);
        this.insert(newNode);

        if(this.map.size > this.cap){
            const lru = this.left.next;
            this.remove(lru);
            this.map.delete(lru.key);
        }
        // this.updateCache(key, value);
    }
}

class ListNode{
    constructor(key, val){
        this.val = val;
        this.key = key;
        this.next = null;
        this.prev = null;
    }
}
