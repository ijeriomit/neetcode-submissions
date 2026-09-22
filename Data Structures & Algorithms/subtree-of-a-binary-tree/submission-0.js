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
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isSubtree(root, subRoot) {
        if(subRoot == null) {
            return true;
        }
        if(root == null) {
            return false;
        }
        if(this.isSameTree(root, subRoot)){
            return true;
        }
        return this.isSubtree(root.left, subRoot) || this.isSubtree(root.right, subRoot);
    }
    isSameTree(tree1, tree2){
        if(tree1 == null || tree2 == null){
            return tree1 == tree2;
        }
        if(tree1.val != tree2.val){
            return false;
        }
        return this.isSameTree(tree1.left, tree2.left) && this.isSameTree(tree1.right, tree2.right);
    }
}
