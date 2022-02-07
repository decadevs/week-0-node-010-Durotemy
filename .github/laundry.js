/**
 * Laundry Problem
 *
 * @param {number} noOfWashes
 * @param {number[]} cleanPile
 * @param {number[]} dirtyPile
 *
 * @returns {number}
 */
 function getMaxPairs(noOfWashes, cleanPile, dirtyPile) {
    for(let i = 0; i<dirtyPile.length; i++) {
        while(noOfWashes > 0){
            if(cleanPile.includes(dirtyPile[i])){
              cleanPile.push(dirtyPile[i])
              dirtyPile.splice(i,1)
              noOfWashes--
            }
            else{
              i++
            }
            // noOfWashes--
        }
    }
    let baggy = cleanPile.sort()
    // console.log(baggy)
    let store = []
    let storage;
    for(let k = 0; k < baggy.length; k++){
          if(baggy[k] == baggy[k + 1]){
            store.push(baggy[k]) && store.push(baggy[k+1])
            baggy.splice(0,1) 
          }
          // console.log(store)
          
          // if(baggy[k] == baggy[k+1]){
          // let save=store.push(baggy[k]) && store.push(baggy[k+1])
          //      storage = baggy.splice(k,1) && baggy.splice(k+1,1);
          //      console.log(save)
          // }
    }
    // console.log(storage)
    // console.log(cleanPile.sort())
    
    // console.log(cleanPile)
    // console.log(dirtyPile)
   let fitForTravelling = store.length
  //  console.log(fitForTravelling/2)
  return fitForTravelling/2;
}

module.exports = getMaxPairs;
