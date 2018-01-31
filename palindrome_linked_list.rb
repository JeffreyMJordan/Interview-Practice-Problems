# Definition for singly-linked list.
# class ListNode
#     attr_accessor :val, :next
#     def initialize(val)
#         @val = val
#         @next = nil
#     end
# end

# @param {ListNode} head
# @return {Boolean}

#Yes, I know this one 
#Use two pointers, first get the length as n
#Then send your tail pointer down n times 
#If it matches your starter pointer, continue
#If it doesn't then return

#Ok, this isn't O(n)
#O(n) time is easy, O(1) space is way harder 
#Ok, so it seems like I can reverse the first half of the linked list then compare the two halves 
#I then re-reverse it to avoid mutating the list (Don't actually have to do this )
#rev, rev.next, slow = slow, rev, slow.next


def is_palindrome(head)
  return true if head.nil?
  rev = nil
  fast = slow = head
  
  while fast and fast.next
    fast = fast.next.next
    rev, rev.next, slow = slow, rev, slow.next
  end 
  
  if fast 
    slow = slow.next
  end
  
  while rev
    if rev.val != slow.val 
      return false
    end
    rev = rev.next 
    slow = slow.next
  end
  true
end