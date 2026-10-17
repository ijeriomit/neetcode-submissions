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
    preorderTraversal(root) {
        const nums = [];

        const preOrder = (node) => {
            if(!node) {
                return;
            }
            nums.push(node.val);
            preOrder(node.left);
            preOrder(node.right);
        }
        preOrder(root);
        return nums;
    }
}
