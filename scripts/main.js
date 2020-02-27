import initializeDetailButtonEvents from './dialog.js';
import { useFish } from './FishDataProvider.js'
import FishList from './FishList.js'

// initializeDetailButtonEvents()

useFish()

const arrayOfTheFishObjects = useFish()

// for (const currentFishObject of arrayOfTheFishObjects) {
//     console.log(currentFishObject)
// }

FishList()
initializeDetailButtonEvents()
