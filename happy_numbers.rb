#The biggest thing here is how to determine loops 
#Is there some kind of pattern? 
#Tortoise and hare

def is_happy(n)
  return true if n==1
  slow = n 
  fast = n 
  fast = cycle(fast)
  while(slow!=fast)
    slow = cycle(slow)
    fast = cycle(fast)
    fast = cycle(fast)
    if fast==1 
      return true
    end
  end
  return false
end

def cycle(num)
  arr = num.to_s.split("").map{|el| el.to_i}
  res = 0 
  arr.each do |el| 
    res += el**2
  end
  return res
end