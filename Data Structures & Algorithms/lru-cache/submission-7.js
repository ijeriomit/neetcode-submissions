class ListNode {
    constructor(key = null, val = null, next = null, prev = null) {
        this.val = val;
        this.key = key;
        this.next = next;
        this.prev = prev;
    }
}

class LRUCache {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.cap = capacity;
        this.cache = new Map();
        this.left = new ListNode();
        this.right = new ListNode();
        this.left.next = this.right;
        this.right.prev = this.left;
    }

    insert(node){
        let temp = this.right.prev;
        temp.next = node;
        node.prev = temp;
        node.next = this.right;
        this.right.prev = node
    }
    remove(node) {
        let prev = node.prev;
        let next = node.next;
        prev.next = next;
        next.prev = prev;
    }
    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        let node = this.cache.get(key) ?? null;
        if(node){
            this.remove(node);
            this.insert(node);
            return node.val;
            //something with cache
        }
        return -1;
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        
        if(this.cache.has(key)){
            this.remove(this.cache.get(key));
        }
        const node = new ListNode(key, value)
        this.cache.set(key, node);
        this.insert(node);

        if(this.cache.size > this.cap){
            const lru = this.left.next;
            this.remove(lru);
            this.cache.delete(lru.key);
        }
    }
}
