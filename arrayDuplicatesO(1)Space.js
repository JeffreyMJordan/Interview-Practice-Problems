/**
 * @param {number[]} nums
 * @return {number[]}
 */

/**
doing this without extra space is tricky 
Getting O(n) is easy 
My standard MO would be to just map the numbers to their frequencies of occurence 
Can I recreate the hash functionality? 
I can think of a constant space and O(n^2) solution 
I use the array itself to store information 

*/
var findDuplicates = function(nums) {
  let res = [];
  nums.forEach((num) => {
    if(nums[Math.abs(num) - 1] < 0){
      res.push(Math.abs(num));
    }else{
      nums[Math.abs(num) - 1] = nums[Math.abs(num) - 1] *-1;
    }
  })
  return res;
};