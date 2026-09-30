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
     * @param {number} k
     * @return {ListNode}
     */
    reverseKGroup(head, k) {

        //loop until end of list
            //check there are k nodes left when starting new group
              //break loop if less
            //reverse node
            //check end of group
                //swap tail and head
                //points to start of new group

        let curr = head;
        let prev = null;
        let prevGroupEnd = null;
        let newGroupHead = null;
        let groupStart = null;
        let i = 0;
        let firstSwap = true;

        while(curr != null){
            if(i == 0) {
                if(!this.enoughNodesLeft(curr, k)) {
                    break;
                }
                groupStart = curr;
            }
            [curr, prev] = this.reverseNodes(curr, prev); 
            i++;

            if(i == k){ // new group
                i = 0;

                newGroupHead = prev;

                if(prevGroupEnd){
                    prevGroupEnd.next = prev
                }
                prevGroupEnd = groupStart;
                if(firstSwap) {
                    firstSwap = false;
                    head = newGroupHead;
                }
                prev = null
            }
        }

        if (prevGroupEnd) {
            prevGroupEnd.next = curr;
        }

        return head;  
    }

    reverseNodes(curr, prev){
        let temp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = temp;
        return [curr, prev];
    }
    enoughNodesLeft(curr, k) {
        for(let i = 0; i < k; i++){
            if(curr == null){
                return false;
            }
            curr = curr.next;
        }
        return true;
    }
}
