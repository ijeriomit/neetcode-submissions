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
     * @return {number[][]}
     */
    levelOrder(root) {
        const list = [];
        
        const preOrder = (node, depth) => {
            if(!node){
                return;
            }
            if(list[depth]) {
                list[depth].push(node.val);  
            } else {
                list.push([node.val]);
            }
            preOrder(node.left, depth + 1);
            preOrder(node.right, depth + 1);
        };
        preOrder(root, 0);

        return list;
    }
}
