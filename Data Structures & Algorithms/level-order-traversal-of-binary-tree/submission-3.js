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
        const nums = [];
        if(!root) return nums;
        const queue = [root];
        let head = 0;
        while(head < queue.length) {
            let level = [];
            const levelSize = queue.length - head;
            for(let i = 0; i < levelSize; i++){
                let node = queue[head];
                head++;
                if(node !== null) {
                    level.push(node.val);
                    if (node.left) queue.push(node.left);
                    if (node.right) queue.push(node.right);
                }
    
            }
            if(level.length > 0){
                nums.push(level);
            }
        }
        return nums;
    }
}
