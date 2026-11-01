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
     * @return {ListNode}
     */
    insertionSortList(head) {
        let curr = head;
        const sorted = [];
        while(curr){
            sorted.push(curr);
            const temp = curr;
            curr = curr.next;
            temp.next = null;
        }
        sorted.sort((a,b) => {
            return a.val - b.val
        });
        for(let i = 0; i < sorted.length -1; i++){
            const next = sorted[i + 1] ?? null;
            sorted[i].next = next;
        }
        return sorted[0];
    }
}
