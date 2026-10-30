class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class MyDeque {
        constructor(cap){
            this.cap = cap;
            this.size = 0;
            this.head = null;
            this.tail = null;
        }

        pop(){
            if(this.isEmpty()){
                return;
            }
            this.size -= 1;
            const val = this.head.val;
            if(this.head == this.tail){
                this.head = null;
                this.tail = null;
            } else {
                this.head = this.head.next;
            }

            return val;
        }

        insertLeft(val) {
            if(this.isFull()){
                return;
            }
            const newNode = new Node(val);
            if(this.isEmpty()) {
                this.tail = newNode;
                this.head = newNode;
            } else {
                newNode.next = this.head;
                this.head = newNode;
            }
            this.size += 1;
        }

        insertRight(val) {
            if(this.isFull()){
                return;
            }
            const newNode = new Node(val);
            if(this.isEmpty()){
                this.tail = newNode;
                this.head = newNode;
            } else {
                this.tail.next = newNode;
                this.tail = newNode;
            }
            this.size += 1;
        }
        isFull(){
            return this.size == this.cap;
        }
        isEmpty(){
            return this.size == 0;
        }

    }

class Solution {
    /**
     * @param {number[]} arr
     * @param {number} k
     * @param {number} x
     * @return {number[]}
     */

    
    findClosestElements(arr, k, x) {
        const deque = new MyDeque(k);
        let left = 0;
        let right = arr.length - 1;
        let mid = null;
        while(left <= right) {
            mid = Math.floor((left + right) / 2);
            if(arr[mid] == x){
                // deque.insertLeft(arr[mid]);
                break;
            }
            if(arr[mid] < x && arr[mid+1] > x){
                console.log("break: ", mid);
                break;
            }
            if(arr[mid] < x){
                left = mid + 1;
            }
            else {
                right = mid - 1;
            }
        }
        left = mid;
        right = mid + 1;
        while(!deque.isFull()) {

            if (left < 0) {
                deque.insertRight(arr[right]);
                right++;
                continue;
            }

            // Right side exhausted
            if (right >= arr.length) {
                deque.insertLeft(arr[left]);
                left--;
                continue;
            }

            const a = Math.abs(arr[left] - x);
            const b = Math.abs(arr[right] - x);
            // console.log("A: ", a, "B:", b, "left: ", left, "right: ", right, "deque: ", deque);
            if(a <= b){
                deque.insertLeft(arr[left]);
                left--;
            } else {
                deque.insertRight(arr[right])
                right++;
            }
        }

        const result = [];
        while(!deque.isEmpty()) {
            result.push(deque.pop());
        }

        return result;
    }
}
