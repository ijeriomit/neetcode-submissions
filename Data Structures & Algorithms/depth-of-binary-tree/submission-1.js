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
     * @return {number}
     */
    maxDepth(root) {

        const preOrder = (node, depth) => {
            if(!node){
                return depth;
            }
            
            const lDepth = preOrder(node.left, depth + 1);
            const rDepth = preOrder(node.right, depth + 1);
            return Math.max(lDepth, rDepth);
        }

        return preOrder(root, 0);
    }
}
