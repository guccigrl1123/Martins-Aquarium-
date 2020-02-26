
const fishCollection = [
    {
        name: "Betty",
        species: "Orange Clownfish",
        location: "Caribbean",
        length: "3 in",
        food: ["Algae", "crustaceans"]
    },

    {
        name: "Nemo",
        species: "Orange Clownfish",
        location: "Caribbean",
        length: "3 in",
        food: ["Algae", "crustaceans"]
    },

    {
        name: "Dory",
        species: "Orange Clownfish",
        location: "Caribbean",
        length: "3 in",
        food: ["Algae", "crustaceans"]
    },

    {
        name: "Lucy",
        species: "Butterfly Fish",
        location: "Caribbean",
        length: "3 in",
        food: ["Algae", "crustaceans"]
    },
    {
        name: "Nicolas",
        species: "Emperor Angelfish",
        location: "Caribbean",
        length: "3 in",
        food: ["Algae", "crustaceans"]
    },
    {
        name: "Jules",
        species: "Clown Triggerfish",
        location: "Caribbean",
        length: "3 in",
        food: ["Algae", "crustaceans"]
    }
]

export const useFish = () => {
    return fishCollection.slice()
}