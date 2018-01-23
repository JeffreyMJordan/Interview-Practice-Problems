// Definition for singly-linked list:
// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }
//
function removeKFromList(l, k) {
  //Iterate through list, deleting every node I find that 
  //has value k 
  //I do this by keeping track of the previous node, then setting its 
  //next value to curr's next 
  let curr = l; 
  let prev; 
  if(!l){
      return [];
  }
  while(curr){
      let swapped = false;
      if (curr.value === k){
          if(prev){
              prev.next = curr.next
              swapped = true;
          }else{
              l = l.next;   
              swapped = true;
          }
      }
      if(swapped){
          curr = curr.next
      }else{
          prev = curr;
          curr = curr.next;
      }
  }
  if (l){
      return l.toJSON();
  }
  return [];
  
}