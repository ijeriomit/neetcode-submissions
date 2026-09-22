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
     * @return {void}
     */
    reorderList(head) {
    
        let fast = head.next;
        let slow = head;
        while(fast !== null && fast.next !== null){
            fast = fast.next.next;
            slow = slow.next;
        }
        let end = slow.next;
        let prev = (slow.next = null);
        while(end !== null){
            let tmp = end.next;
            end.next = prev;
            prev = end;
            end = tmp;
        }
        console.log(slow);
        let start = head;
        end = prev;
        while(end !== null){
            let tmp1 = start.next;
            let tmp2 = end.next;
            start.next = end;
            end.next = tmp1;
            start = tmp1;
            end = tmp2;
        }
    }
}
