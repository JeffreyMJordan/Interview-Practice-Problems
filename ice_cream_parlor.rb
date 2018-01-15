t = gets.strip.to_i
for a0 in (0..t-1)
    money = gets.strip.to_i
    n = gets.strip.to_i
    arr = gets.strip
    arr = arr.split(' ').map(&:to_i)
    solve(arr, money)
    
    #One way is to map each number k in the array to its index
    #We iterate through each item in the array, check it our hash contains [money-k], then return the result if it does
    hash = Hash.new{|h, k| h[k] = []}
    arr.each_with_index do |el, idx| 
        hash[el] << idx
    end 
    arr.each_with_index do |el, idx| 
        if hash[money-el]
            other_arr = hash[money-el].dup
            other_arr.delete(idx)
            if !other_arr.empty?
                puts "#{hash[el].first + 1} #{other_arr.first + 1}"  
                break
            end 
        end 
    end 
end
