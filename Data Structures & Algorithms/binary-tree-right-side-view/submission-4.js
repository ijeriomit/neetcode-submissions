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
        const queue = [root]
        const rightView = [];
        while(queue.length > 0){
            let last = null;
            const qLen = queue.length;
            for(let i = 0; i < qLen; i++){
                const top = queue.shift();
                if(!top){
                    continue;
                }
                last = top;
                if(top.left) {
                    queue.push(top.left);
                }
                if(top.right) {
                    queue.push(top.right);
                }
            }
            if(last){
                rightView.push(last.val);
            }
        }
    return rightView;
    }
}
