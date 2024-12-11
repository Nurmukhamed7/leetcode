# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def swapPairs(self, head: Optional[ListNode]) -> Optional[ListNode]:
        dummy=ListNode(0)
        dummy.next=head
        prev=dummy
        cur=head
        while cur and cur.next:
            nxt=cur.next
            prev.next=nxt
            cur.next=nxt.next
            nxt.next=cur
            prev=cur
            cur=prev.next
        return dummy.next
            
#   R      
# h
# 1,2,3,4
# L