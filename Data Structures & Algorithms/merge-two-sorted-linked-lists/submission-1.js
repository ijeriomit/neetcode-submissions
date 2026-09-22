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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        if(!list1 && !list2){
            return list1;
        }
        else if(!list1 && list2){
            return list2
        }
        else if(list1 && !list2){
            return list1
        }
        // let firstVal = list1.val < list2.val ? list1 : list2;
        let curr = new ListNode(null);
        let head = curr;
        // 
        while(list1 && list2) {
            if(list1.val <= list2.val){
                curr.next = new ListNode(list1.val);
                list1 = list1.next;
            } else {
                curr.next = new ListNode(list2.val);
                list2 = list2.next;
            }
            curr = curr.next
        }
        if(list1) curr.next = list1
        if(list2) curr.next = list2
        return head.next;
    }
}
