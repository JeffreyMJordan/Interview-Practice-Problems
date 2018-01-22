def has_cycle(head):
    tortoise = head 
    hare = head 
    cycle = False
    while tortoise.next and hare.next:
        if hare.data == tortoise.data: 
            cycle = True 
            break
        if hare.next:
            hare = hare.next 
        
        if hare.data == tortoise.data: 
            cycle = True 
            break
         
        if hare.next:
            hare = hare.next 
        
        if hare.data == tortoise.data:
            cycle = True 
            break
            
        if tortoise.next:
            tortoise = tortoise.next

    return cycle