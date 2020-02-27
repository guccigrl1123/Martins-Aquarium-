
const locationCollection = [
    {
        city: "Knoxville",
        date: "1-1-01",
        image: "Caribbean",
       
    },

    {
        city: "Kingston",
        date: "2-2-02",
        image: "Caribbean",
    },

    {
        city: "SweetWater",
        date: "3-3-03",
        image: "Caribbean",
    }

    
]

export const useLocation = () => {
    return locationCollection.slice()
}