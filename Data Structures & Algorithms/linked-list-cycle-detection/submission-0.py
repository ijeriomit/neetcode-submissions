# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next

class Solution:
    def hasCycle(self, head: Optional[ListNode]) -> bool:
        visited = set()
        cycle = False
        while(head):
            if(head in visited):
                cycle = True
                break
            visited.add(head)
            head = head.next
        return cycle
