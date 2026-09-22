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
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1, l2) {
        let carry = 0;
        let newNode = new ListNode(null);
        let l3 = newNode;
        while(l1 != null || l2 != null){
            let sum = (l1?.val ?? 0) + (l2?.val ?? 0) + carry;
            if(sum >= 10){
                sum = sum % 10;
                carry = 1;
            } else {
                carry = 0;
            }
            newNode.next = new ListNode(sum);
            newNode = newNode.next;
            l1 = l1?.next ?? null;
            l2 = l2?.next ?? null;
        }
       
        if(carry == 1)
        {
            newNode.next = new ListNode(carry);
        }

        return l3.next;
    }
}
