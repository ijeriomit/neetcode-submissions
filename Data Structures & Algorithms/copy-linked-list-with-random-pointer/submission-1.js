// class Node {
//   constructor(val, next = null, random = null) {
//       this.val = val;
//       this.next = next;
//       this.random = random;
//   }
// }

class Solution {
    /**
     * @param {Node} head
     * @return {Node}
     */
    copyRandomList(head) {
        let nodeMap = new Map();
        let curr = head;
       
        let prev = new Node(null);
        let newList = prev;
        
        while(curr != null) {
            let newNode = new Node(curr.val, null, null);
            prev.next = newNode;
            nodeMap.set(curr, newNode)
            curr = curr.next;
            prev = prev.next;
        }

        curr = head;
        while(curr !== null){

            let node = nodeMap.get(curr);
            node.random = nodeMap.get(curr.random);
            curr = curr.next;
        }
        return newList.next;
    }
}
