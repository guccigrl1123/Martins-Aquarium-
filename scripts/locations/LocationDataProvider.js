
const locationCollection = [
    {
        city: "Deauville",
        water: "English Channel",
        date: "1-1-01",
        image: "https://www.tripsavvy.com/thmb/ThUzIA07ngERJKpOXjNY2TMRhDg=/2576x2576/smart/filters:no_upscale()/the-famous-colorful-parasols-on-deauville-beach--normandy--northern-france--europe-991924534-5b462d7746e0fb005bfb3f99.jpg",
        favoriteFish: "Requin Renard"
    },

    {
        city: "Nice",
        water: "Baie des Anges",
        date: "2-2-02",
        image: "https://i1.wp.com/handluggageonly.co.uk/wp-content/uploads/2018/03/Parc-du-Mont-Boron.jpg?resize=780%2C508&ssl=1",
        favoriteFish: "Mulet Gris"
    },

    {
        city: "Brest",
        water: "L'Élorn",
        date: "3-3-03",
        image: "https://rccl-h.assetsadobe.com/is/image/content/dam/royal/data/ports/brest-france/overview/brest-france-coastal-cliff.jpg?$1024x700$",
        favoriteFish: "Sergent Majeur"
    },

    {
        city: "Ajaccio",
        water: "Golfe D'Ajaccio",
        date: "4-4-04",
        image: "https://www.cunard.com/content/dam/cunard/inventory-assets/ports/AJC/AJC.jpg.image.750.563.low.jpg",
        favoriteFish: "Napoleon"
    }
    
]

export const useLocation = () => {
    return locationCollection.slice()
}