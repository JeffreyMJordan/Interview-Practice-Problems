function groupingDishes(dishes) {
  //Seems like I'll have to pull out all the ingredients 
  //Then sort them lexicographically 
  //This takes nlogn...
  //
  //Anyways, I could map each ingredient 
  //to an array representing its dishes 
  //Then the longest thing I need to do is sort the ingredients 
  //Oh, [].sort() automatically does lexicographic sorting 
  let hash = {};
  dishes.forEach(dishArr => {
      let dish = dishArr[0];
      for(let i = 1; i<dishArr.length; i++){
          let ingred = dishArr[i];
          if(hash[ingred]){
              hash[ingred].push(dish);
          }else{
              hash[ingred] = [dish];
          }
      }
  });
  let arr = [];
  Object.keys(hash).sort().forEach(ingred => {
      let subarr = [ingred];
      subarr = subarr.concat(hash[ingred].sort());
      if(subarr.length>2){
          arr.push(subarr);
      }
      
  })
  return arr;
}
