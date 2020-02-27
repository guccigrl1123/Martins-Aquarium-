import { useLocation } from "./LocationDataProvider.js"
import Location from "./Location.js"


const LocationList = () => {

    // Get a reference to the `<article class="content">` element

    // get the data from the provider

    const locations = useLocation()

    // iterate the array

    const contentElement = document.querySelector(".harvestList")
    
    for (const locationObject of locations) {
        //convert each object to HTML representation 
        contentElement.innerHTML += Location(locationObject)
    }
    
    // put HTML in DOM 

    
  
}

export default LocationList 