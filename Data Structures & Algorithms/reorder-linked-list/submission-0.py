# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next

class Solution:
    def reorderList(self, head: Optional[ListNode]) -> None:
        slow, fast = head, head.next
        while fast and fast.next:
            slow = slow.next
            fast = fast.next.next        
        second = slow.next
        slow.next = None
        prev = slow.next
        while second:
            temp = second.next #save the link
            second.next = prev #set
            prev = second
            second = temp
        first = head
        second = prev
        while first and second:
            temp1 = first.next
            temp2 = second.next
            first.next = second
            second.next = temp1
            first, second = temp1, temp2

