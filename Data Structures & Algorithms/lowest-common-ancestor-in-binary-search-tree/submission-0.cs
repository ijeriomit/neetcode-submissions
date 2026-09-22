/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     public int val;
 *     public TreeNode left;
 *     public TreeNode right;
 *     public TreeNode(int val=0, TreeNode left=null, TreeNode right=null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

public class Solution {

    public TreeNode LowestCommonAncestor(TreeNode root, TreeNode p, TreeNode q) {
        TreeNode ans = null;
        if((root.val > p.val && root.val < q.val) || (root.val < p.val && root.val > q.val)){
            ans = root;
        }
        else if(q.val > root.val && p.val > root.val){
            ans = LowestCommonAncestor(root.right, q, p);
        }
        else if(q.val < root.val && p.val < root.val){
            ans = LowestCommonAncestor(root.left, q, p);
        }
        else if(root.val == q.val){
            ans = q;
        }
        else if(root.val == p.val){
            ans = p;
        }
        return ans;
    }  
  
}
