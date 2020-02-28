const tipCollection = [
    {
        title: "Make sure tank has water.",
        tip: "Check salinity",
       
    },

    {
        title: "Clean the poop out on a regular basis.",
        tip: "every other day at least",
        
    },

    {
        title: "Make sure to feed them.",
        tip: "number of times depends on the fish",
       
    }
]

export const useTip = () => {
    return tipCollection.slice()
}