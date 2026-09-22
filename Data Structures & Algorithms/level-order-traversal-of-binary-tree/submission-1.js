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
        const levels = [];
        if(!root){
            return levels;
        }
        const queue = [root];

        while(queue.length) {
            const len = queue.length;
            const level = [];
            for(let i =0; i < len; i++){
                const top = queue.shift();
                if(top.left){
                    queue.push(top.left);
                }
                if(top.right){
                    queue.push(top.right);
                }
                level.push(top.val);
            }
            levels.push(level);
        }
        return levels;
    }
}
