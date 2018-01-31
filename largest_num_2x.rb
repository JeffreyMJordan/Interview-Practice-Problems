# @param {Integer[]} nums
# @return {Integer}

#I only need to find the largest and second largest 
#Then I check if the largest is more than twice as big as the second largest 
#This takes O(n)
#I guess I also need to store the index for the largest 
def dominant_index(nums)
  largest_idx = -1 
  largest = -1
  second = -1 
  nums.each_with_index do |num, idx| 
    if num>largest 
      second = largest 
      largest = num 
      largest_idx = idx
    elsif num > second 
      second = num
    end
  end

  if largest >= second*2 
    return largest_idx
  end 
  -1 
  
end