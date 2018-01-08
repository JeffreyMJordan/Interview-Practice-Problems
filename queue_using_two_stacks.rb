# Enter your code here. Read input from STDIN. Print output to STDOUT
#1 means enqueue
#2 means dequeue
#3 means print the element at the front of the queue

class Queue 
  def initialize 
      @in = []
      @out = []
  end
  
  def enqueue(item)
      @in << item 
  end 
  
  def dequeue 
      if @out.empty? 
          until @in.empty? 
              @out << @in.pop
          end     
      end 
      @out.pop 
  end 
  
  def front 
      if @out.empty? 
          until @in.empty? 
              @out << @in.pop
          end 
      end 
      @out.last
  end 
end 

lines = gets.chomp.to_i
q = Queue.new 
lines.times do 
  input = gets.chomp.split(" ").map{|el| el.to_i}
  if input[0]==1 
      q.enqueue(input[1])
  elsif input[0] == 2 
      q.dequeue
  elsif input[0] == 3
      puts q.front
  end 
end 