function areFollowingPatterns(strings, patterns) {
  //Go through each element by element 
  //For the first occurence of a pattern, map it to the corresponding item in the strings 
  //array 
  //For all other occurences of the pattern string, we check to see if the correspondng
  //string is the same, if it isn't, we return false, if it is, continue 
  //At the end, return true 
  //This takes O(N)
  //I'm also assuming that strings and patterns are always the same length 
  //Also need to check if a string is every mapped to the wrong pattern... 
  //
  let hash = {};
  let strToPat = {};
  for(var i = 0; i<strings.length; i++){
      currPat = patterns[i];
      currString = strings[i];
      if(hash[currPat]){
          if(hash[currPat] != currString){
              return false;
          }
      }else if(strToPat[currString]){
          if(strToPat[currString] != currPat){
              return false;
          }
      }else{
          hash[currPat] = currString;
          strToPat[currString] = currPat;
      }
  }
  
  return true
}