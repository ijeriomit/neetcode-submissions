# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next

class Solution:
    def addTwoNumbers(self, l1: Optional[ListNode], l2: Optional[ListNode]) -> Optional[ListNode]:
        carry = 0
        sumList = ListNode(0)
        head = sumList
        while(l1 and l2):
            # sum = l1.val + l2.val + carry
            # if(sum >= 10):
            #     carry = 1
            #     sumList.next = ListNode(sum - 10)
            # else:
            #     sumList.next = ListNode(sum)
            #     carry = 0
            sum, carry = self.sumNodes(l1.val, l2.val, carry)
            sumList.next = ListNode(sum)
            l1 = l1.next
            l2 = l2.next
            sumList = sumList.next
        while(l1):
            sum, carry = self.sumNodes(l1.val, 0, carry)
            sumList.next = ListNode(sum)
            sumList = sumList.next
            l1 = l1.next
        while(l2):
            sum, carry = self.sumNodes(0, l2.val, carry)
            sumList.next = ListNode(sum)
            sumList = sumList.next
            l2 = l2.next
        if(carry and l1 is None and l2 is None):
            sumList.next = ListNode(carry)
        return head.next
    
    def sumNodes(self, num1, num2, carry):
        sum = num1 + num2 + carry
        if(sum >= 10):
            carry = 1
            sum = sum - 10
        else:
            carry = 0
        
        return [sum, carry]
