# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next

class Solution:
    def removeNthFromEnd(self, head: Optional[ListNode], n: int) -> Optional[ListNode]:
        dummyHead = ListNode(0, head)
        fast = dummyHead.next
        slow = dummyHead.next

        for i in range(n):
            fast = fast.next
        # print(fast.val, slow.val)
        if(fast is None):
            return head.next
        while(fast.next):
            slow = slow.next
            fast = fast.next
        print(slow.val, fast)
        slow.next = slow.next.next
        return dummyHead.next
