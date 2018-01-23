//
// Definition for binary tree:
// function Tree(x) {
//   this.value = x;
//   this.left = null;
//   this.right = null;
// }
// 
// This naturally seems recursive 
// It's coming in as a POJO
// Hmmm
// I could put the left, then the right nodes into the arr
// Then I could traverse and repeat
// I think I should use a helper method
// Or maybe I could just use a priority queue...
// Actually, why don't I just map each thing to its depth 
// Then I go through each depth, pulling out and concating the array 
// This is like O(2N)
// 
let hash = {}
function traverseTree(t) {
    if(!t){
        return [];
    }
    let arr = [];
    let maxDepth = treeHelper(t, 0);
    for(let i = 0; i<=maxDepth; i++){
        hash[i].forEach((el) => {
            arr.push(el);
        });
    }
    return arr;
}

function treeHelper(node, depth){
    if(hash[depth]){
        hash[depth].push(node.value);
    }else{
        hash[depth] = [node.value];
    }
    let depth1 = depth; 
    let depth2 = depth;
    if(node.left){
        depth1 = treeHelper(node.left, depth+1);
    }
    if(node.right){
        depth2 = treeHelper(node.right, depth+1);
    }
    if(depth1>depth2){
        return depth1;
    }
    return depth2;
}