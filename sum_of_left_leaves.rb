# Definition for a binary tree node.
# class TreeNode
#     attr_accessor :val, :left, :right
#     def initialize(val)
#         @val = val
#         @left, @right = nil, nil
#     end
# end

# @param {TreeNode} root
# @return {Integer}

# Let's just do a dfs, but only go left, not right 
# I don't think this is that hard 
#ACTUALLY I do need to do a full dfs 
#Maybe I could have some way to record where the node's parent came from 
#Yeah, maybe I could monkey patch this 

#Let's say I can't monkey patch it... 
#I could keep iterating, then do the updating on the nodes before the leaves 
#Yeah, I think I'll do that 


def sum_of_left_leaves(root)
  max = 0
  prc = Proc.new{|item| 
    max += item
    }
  dfs(root, &prc)
  max 
end

def dfs(node, &prc)
  return if node.nil?
  
  if(node.left)
    if(child?(node.left))
      prc.call(node.left.val)
    else
      dfs(node.left, &prc)
    end
  end
  
  if(node.right)
    dfs(node.right, &prc)
  end
  
end

def child?(node)
  !node.left & !node.right
end