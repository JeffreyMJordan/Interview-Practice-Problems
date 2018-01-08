#Runs in O(sqrt(n) time )
def is_prime(n)
  if n==2 
      return "Prime"
  end 
  if n<=1 
      return "Not prime"
  end     
  
  idx = 2 
  while idx<=Math.sqrt(n)
     if n%idx==0 
        return "Not prime"
     end 
     idx += 1 
  end
  "Prime"
end

p = gets.strip.to_i
for a0 in (0..p-1)
  n = gets.strip.to_i
  puts is_prime(n)
end
