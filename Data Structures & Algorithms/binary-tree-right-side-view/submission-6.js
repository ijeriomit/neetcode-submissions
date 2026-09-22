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
        const ans = [];
        const q = [];
        if(root){
            q.push(root);
        }
        while(q.length > 0){
            const qLen = q.length;
            // ans.push(right);
            for(let i = 0; i < qLen; i++){
                const top = q.shift();
                if(i == qLen - 1){
                    ans.push(top.val)
                }
                if(top.left){
                    q.push(top.left);
                }
                if(top.right){
                    q.push(top.right);
                }

            }
        }
        return ans;
    }
}
