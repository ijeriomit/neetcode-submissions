/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number[]}
     */
    rightSideView(root) {
        const result = [];
        const queue = [root];
        while(queue.length != 0){
            let rightMost = null
            const qLen = queue.length
            for(let i = 0; i < qLen; i++){
                const node = queue.shift();
                if(node) {
                    rightMost = node;
                    queue.push(node.left);
                    queue.push(node.right);
                }
            }
            if(rightMost) {
                result.push(rightMost.val);
            }
            
            // console.log("queue after", queue);
        }
        return result;
    }
}
