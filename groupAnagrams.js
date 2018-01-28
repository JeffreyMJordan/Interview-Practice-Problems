/**
 * @param {string[]} strs
 * @return {string[][]}
 */

/** 
    Ok, so whenever I find a string that isn't already an anagram, I put it in an array 
    so... how do I check if it's part of an existing anagram array? 
    I could put the arrays in a hash, then see if the array comes up when I check the hash value 
    So... what do I hash it to? I could just sort the string alphabetically
    That makes the time complexity n*(klogk), so let's hope the words aren't too long 
    What about hash equality? 
    Eh, lemme just sort em
*/
var groupAnagrams = function(strs) {
  let hash = {};
  strs.forEach((str) => {
      let sortedString = str.split("").sort().join("");
      if(hash[sortedString]){
          hash[sortedString].push(str)
      }else{
          hash[sortedString] = [str];
      }
  })
  return Object.values(hash).sort();
};