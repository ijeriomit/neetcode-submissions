/**
 * Definition for a _Node.
 * class _Node {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {_Node} head
     * @param {number} insertVal
     * @return {_Node}
     */
    insert(head, insertVal) {
        const newNode = new _Node(insertVal);
        if(head == null){
            newNode.next = newNode;
            return newNode;
        }
        if(head.next == head){
            head.next = newNode;
            newNode.next = head;
            return head;
        }
        let fast = head.next;
        let slow = head;

        let nodeInserted = false;
        while(true){
            if(slow.val <= insertVal && insertVal <= fast.val){
                slow.next = newNode;
                newNode.next = fast;
                nodeInserted = true;
                break;
            }
            if(slow.val > fast.val){
                if(insertVal >= slow.val || insertVal <= fast.val){
                    slow.next = newNode;
                    newNode.next = fast;
                    nodeInserted = true;
                    break;
                }
            }
            slow = slow.next;
            fast = fast.next;
            if(slow === head){
                slow.next = newNode;
                newNode.next = fast;
                break;
            }
        }
        
        return head;
    }
}
