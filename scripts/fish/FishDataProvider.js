
const fishCollection = [
    {
        name: "Betty",
        species: "Mediterranean rainbow wrasse",
        location: "Baie des anges",
        length: 3,
        food: ["Algae", "crustaceans"],
        image: "data:image/jpeg;base64,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"
       
    },

    {
        name: "Nemo",
        species: "Orange Clownfish",
        location: "Baie des anges",
        length: 10,
        food: ["Algae", "crustaceans"],
        image:"https://res.cloudinary.com/edgepledge/image/upload/s--wmaq_R83--/c_fill,f_auto,h_550,q_auto,w_550/v1502668431/wo44vqrhcsrv5f8gkte6.jpg"
    },

    {
        name: "Dory",
        species: "Blue Tangy",
        location: "Golfe d'Ajaccio",
        length: 3,
        food: ["Algae", "crustaceans"],
        image:"https://images.huffingtonpost.com/2016-05-06-1462567040-5196892-bluetang-thumb.jpg"
    },

    {
        name: "Lucy",
        species: "Butterfly Fish",
        location: "Caribbean",
        length: 5,
        food: ["Algae", "crustaceans"],
        image:"https://fishkeepingadvice.com/wp-content/uploads/Butterfly-Fish1.jpg"
    },
    {
        name: "Nicolas",
        species: "Emperor Angelfish",
        location: "Caribbean",
        length: 7,
        food: ["Algae", "crustaceans"],
        image:"https://commondatastorage.googleapis.com/swf_product_images/marine_life/191_emperor-angelfish-_1.jpg"
    },
    {
        name: "Jules",
        species: "Clown Triggerfish",
        location: "Caribbean",
        length: 9,
        food: ["Algae", "crustaceans"],
        image:"https://images.fineartamerica.com/images-medium-large-5/1-clown-triggerfish-greg-ochocki.jpg"
    }
]

export const useFish = () => {
    return fishCollection.slice()
}

export const mostHolyFish = () => {
    const holyFishArray=[]
    for (const holyFish of fishCollection) {
        if (holyFish.length % 3 === 0) {
           holyFishArray.push(holyFish)  
        }   
}
    return holyFishArray
}   

export const soldierFish = () => {
    const soldiersArray= []
    for (const soldiers of fishCollection) {
        if (soldiers.length % 5 === 0) {
            soldiersArray.push(soldiers)
        }    
}
    return soldiersArray
}

export const nonHolyFish = () => {
    const regularFishArray= []
    for (const regularFish of fishCollection) {
        if (regularFish.length % 3 !== 0 && regularFish.length %5 !==0) {
            regularFishArray.push(regularFish)
        } 
    }    
   return regularFishArray
}
