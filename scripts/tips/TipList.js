import { useTip } from "./TipDataProvider.js"
import Tip from "./Tip.js"


const TipList = () => {

    // Get a reference to the `<article class="content">` element

    // get the data from the provider

    const tips = useTip()

    // iterate the array

    const contentElement = document.querySelector(".tipList")
    
    for (const tipObject of tips) {
        //convert each object to HTML representation 
        contentElement.innerHTML += Tip(tipObject)
    }
    
    // put HTML in DOM 

    
  
}

export default TipList 