/**
 *  FishList which renders individual fish objects as HTML
 */

import { useFish } from "./FishDataProvider.js"
import Fish from "./Fish.js"

// Import `useFish` from the data provider module

const FishList = () => {

    // Get a reference to the `<article class="content">` element

    // get the data from the provider

    const fishes = useFish()

    // iterate the array
    const contentElement = document.querySelector(".fishList")

    for (const fishObject of fishes) {
        //convert each object to HTML representation 
        contentElement.innerHTML += Fish(fishObject)
    }
    
    // put HTML in DOM 

  
}

export default FishList 