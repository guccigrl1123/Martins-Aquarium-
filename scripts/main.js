import initializeDetailButtonEvents from './dialog.js';
import { useFish } from './fish/FishDataProvider.js'
import FishList from './fish/FishList.js'
import { useTip } from './tips/TipDataProvider.js';
import TipList from './tips/TipList.js'

// initializeDetailButtonEvents()





// for (const currentFishObject of arrayOfTheFishObjects) {
//     console.log(currentFishObject)
// }

FishList()
initializeDetailButtonEvents()



TipList()

