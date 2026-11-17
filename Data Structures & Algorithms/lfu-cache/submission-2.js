class LFUCache {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.cap = capacity;
        this.lfuCount = 1;
        this.listCache = new Map();
        this.nodeCache = new Map();
    }
    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        const node = this.nodeCache.get(key) ?? null;
        if(node == null){
            return -1;
        }
        this.incrementNodeFreq(node);

        return node.val;
    }

    incrementNodeFreq(node){
        this.listCache.get(node.count).remove(node);
        if(this.listCache.get(node.count).size === 0){
            this.lfuCount = node.count == this.lfuCount ? this.lfuCount + 1 : this.lfuCount;
            this.listCache.delete(node.count);
        }
        node.count += 1;
        if(!this.listCache.has(node.count)) {
            this.listCache.set(node.count, new LinkedList());
        }
        this.listCache.get(node.count).insert(node);
    }

    /**
     * @param {number} key
     * @param {number} value
     */
    put(key, value) {
       
        if(this.nodeCache.has(key)){
            this.nodeCache.get(key).val = value;
            this.incrementNodeFreq(this.nodeCache.get(key));
            return;
        }

        if(this.nodeCache.size == this.cap) {
            const lruNode = this.listCache.get(this.lfuCount).getLRU();
            this.listCache.get(this.lfuCount).remove(lruNode);
            this.nodeCache.delete(lruNode.key);
        }
        const newNode = new Node(key, value);
        this.nodeCache.set(key, newNode);
        this.lfuCount = 1;
        if(this.listCache.has(newNode.count)){
            this.listCache.get(newNode.count).insert(newNode);
        } else {
            this.listCache.set(newNode.count, new LinkedList());
            this.listCache.get(newNode.count).insert(newNode);
        }
    }
}

class Node {
    constructor(key=null, val=null){
        this.key = key;
        this.val = val;
        this.next = null;
        this.prev = null;
        this.count = 1;
    }
}

class LinkedList {
    constructor(){
        this.head = new Node();
        this.tail = new Node();
        this.head.next = this.tail;
        this.tail.prev = this.head;
        this.size = 0;
    }

    insert(node){
        const temp = this.tail.prev;
        temp.next = node;
        node.prev = temp;
        node.next = this.tail;
        this.tail.prev = node;
        this.size += 1;
    }

    getLRU(){
        return this.head.next;
    }

    remove(node) {
        let prev = node.prev;
        let next = node.next;
        prev.next = next;
        next.prev = prev;
        this.size -= 1;
    }
}

/**
 * Your LFUCache object will be instantiated and called as such:
 * var obj = new LFUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
