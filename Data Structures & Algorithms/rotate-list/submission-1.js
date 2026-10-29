/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

// class MyQueue {
//     constructor(cap){
//         this.capacity = cap;
//         this.size = 0;
//         this.head = null;
//         this.tail = null;
//     }

//     enqueue(newNode){
//         if(this.isFull()){
//             this.dequeue();
//         }
//         if(this.head == null){
//             this.head = newNode;
//             this.tail = this.head;
//         } else {
//             this.tail.next = newNode;
//             // newNode.prev = this.tail;
//             this.tail = this.tail.next;
//         }
//         this.size += 1;
//     }

//     dequeue(){
//         if(this.isEmpty()){
//             return;
//         }
//         const returnNode = this.head;
//         this.head = this.head.next;
//         this.size -= 1;
//         return returnNode;

//     }

//     isFull(){
//         return this.size == this.capacity;
//     }
//     isEmpty(){
//         return this.size == 0;
//     }

// }

class Solution {
    /**
     * @param {ListNode} head
     * @param {number} k
     * @return {ListNode}
     */
    rotateRight(head, k) {
        if(!head || !head.next){
            return head;
        }
        let curr = head;
        let tail = null;
        let len = 1;
        
        while(curr.next){
            curr = curr.next;
            len += 1;
        }
        tail = curr;
        k = k % len;
        if(k === 0){
            return head;
        }
        let pivot = len - k - 1;
        // console.log("mid: ", pivot, "len: ", len, "k:", k, tail);
        curr = head;
        let i = 0;
        while(i <= pivot && curr.next){
            if(i == pivot){
                let temp = curr.next;
                curr.next = null;
                tail.next = head;
                head = temp;
                break;
            }
            i++;
            curr = curr.next;
        }
        
        return head;
    }
}

