
const fishCollection = [
    {
        name: "Betty",
        species: "Orange Clownfish",
        location: "Caribbean",
        length: "3 in",
        food: ["Algae", "crustaceans"],
        image: "https://i.ytimg.com/vi/z_XlTRYLZ1Q/maxresdefault.jpg"
       
    },

    {
        name: "Nemo",
        species: "Orange Clownfish",
        location: "Caribbean",
        length: "3 in",
        food: ["Algae", "crustaceans"],
        image:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.7xhhlta3q-wVKpgzGdTlpAHaFj%26pid%3DApi&f=1"
    },

    {
        name: "Dory",
        species: "Orange Clownfish",
        location: "Caribbean",
        length: "3 in",
        food: ["Algae", "crustaceans"],
        image:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fthedisneyinme.files.wordpress.com%2F2013%2F12%2Fdory.jpg&f=1&nofb=1"
    },

    {
        name: "Lucy",
        species: "Butterfly Fish",
        location: "Caribbean",
        length: "3 in",
        food: ["Algae", "crustaceans"],
        image:"https://fishkeepingadvice.com/wp-content/uploads/Butterfly-Fish1.jpg"
    },
    {
        name: "Nicolas",
        species: "Emperor Angelfish",
        location: "Caribbean",
        length: "3 in",
        food: ["Algae", "crustaceans"],
        image:"https://commondatastorage.googleapis.com/swf_product_images/marine_life/191_emperor-angelfish-_1.jpg"
    },
    {
        name: "Jules",
        species: "Clown Triggerfish",
        location: "Caribbean",
        length: "3 in",
        food: ["Algae", "crustaceans"],
        image:"https://images.fineartamerica.com/images-medium-large-5/1-clown-triggerfish-greg-ochocki.jpg"
    }
]

export const useFish = () => {
    return fishCollection.slice()
}