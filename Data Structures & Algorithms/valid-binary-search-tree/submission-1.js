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
     * @return {boolean}
     */
    isValidBST(root) {
        const recursion = function(node, lowerBound, upperBound){
            if(!node){
                return true;
            }
            if(node.val >= upperBound || node.val <= lowerBound){
                return false;
            }
            const left = recursion(node.left, lowerBound, node.val);
            const right = recursion(node.right, node.val, upperBound);
            return left && right;
        };
        return recursion(root, -Infinity, Infinity);
    }
}
