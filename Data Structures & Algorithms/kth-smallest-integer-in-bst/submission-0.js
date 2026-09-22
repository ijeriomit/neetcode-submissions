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
     * @param {number} k
     * @return {number}
     */
    kthSmallest(root, k) {
        const arr = [];
        const postOrderTraversal = function(node, arr){
            if(!node){
                return;
            }
            postOrderTraversal(node.left, arr);
            arr.push(node.val);
            postOrderTraversal(node.right, arr);
        }
      
        postOrderTraversal(root, arr);
        return arr[k - 1];
    }
}
