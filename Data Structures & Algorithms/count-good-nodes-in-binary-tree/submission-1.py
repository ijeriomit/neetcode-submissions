# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

class Solution:
    def goodNodes(self, root: TreeNode) -> int:
        return self.traversal(root, root.val)

    def traversal(self, node, maxVal) -> int:
        if(node is None):
            return 0
        res = None
        if(node.val >= maxVal):
            res = 1
        else:
            res = 0
        maxVal = max(maxVal, node.val)
        res += self.traversal(node.left, maxVal)
        res += self.traversal(node.right, maxVal)

        return res
