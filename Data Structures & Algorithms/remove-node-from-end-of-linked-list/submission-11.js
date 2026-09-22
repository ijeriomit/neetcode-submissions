/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        let curr = head;
        let count = 0;
        while(curr != null){
            count++;
            curr = curr.next;
        }
        if(count == 1){
            return curr;
        }
        let target = (count - n);
        curr = head;
        if (target == 0){ 
            return curr.next;
        }
        let i = 0;
        let prev = null
        while(curr !== null){
            if(i == target - 1){
                prev = curr;
            }
            if(i == target){
                prev.next = curr.next;
            }
            curr = curr.next;
            i++;
        }
        return head;
    }
}
