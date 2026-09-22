"""
# Definition for a Node.
class Node:
    def __init__(self, x: int, next: 'Node' = None, random: 'Node' = None):
        self.val = int(x)
        self.next = next
        self.random = random
"""

class Solution:
    def copyRandomList(self, head: 'Optional[Node]') -> 'Optional[Node]':
        nodeMap = {}
        curr = head
        while curr:
            nodeMap[curr] = Node(curr.val, None, None)
            curr = curr.next
        for keyNode, valueNode in nodeMap.items():
            valueNode.next = nodeMap.get(keyNode.next)
            valueNode.random = nodeMap.get(keyNode.random)
        return nodeMap.get(head)

        