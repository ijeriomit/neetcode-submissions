
class Node {
    constructor(key = null, val = null, next = null, prev = null){
        this.key = key;
        this.val = val;
        this.next = next;
        this.prev = prev;
    }
}

class LRUCache {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {

        this.capacity = capacity;
        this.cache = new Map();
        this.start = new Node();
        this.end = new Node();
        this.start.next = this.end;
        this.end.prev = this.start;
    }


    insert(node){
        const prev = this.end.prev;
        prev.next = node;
        node.prev = prev;
        node.next = this.end;
        this.end.prev = node;
    }

    remove(node) {
       const prev = node.prev;
       const next = node.next;
        prev.next = next;
        next.prev = prev;
    }
    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        if(this.cache.has(key)){
            const node = this.cache.get(key);
            this.remove(node);
            this.insert(node)
            return node.val;
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

        let newNode = new Node(key, value);
        this.cache.set(key, newNode);
        this.insert(newNode);

        if(this.cache.size > this.capacity) {
            let lru = this.start.next;
            this.remove(lru);
            this.cache.delete(lru.key);
        }
        
    }
    
}
