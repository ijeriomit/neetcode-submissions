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
    public int MaxDepth(TreeNode root) {
        
        return FindDepth(root, 0);
        
    }
    int FindDepth(TreeNode node, int depth){
        if(node == null){
            return depth;
        }
        depth++;
        int Ldepth = FindDepth(node.left, depth);
        int Rdepth = FindDepth(node.right, depth);
        return Math.Max(Ldepth, Rdepth);
    }
}
