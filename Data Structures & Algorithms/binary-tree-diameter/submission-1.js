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
    result = 0;
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    diameterOfBinaryTree(root) {
        this.getTreeHeight(root);
        return this.result;
    }
    getTreeHeight(root){
        if(root == null){
            return 0;
        }
        const left = this.getTreeHeight(root.left);
        const right = this.getTreeHeight(root.right);

        this.result = Math.max(this.result, left + right);
        return 1 + Math.max(left, right);
    }
}
