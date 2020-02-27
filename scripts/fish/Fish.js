/**
 *  Fish which renders individual fish objects as HTML
 */
const Fish = (fish) => {
    return `
        <div class="fish">
            <div>
                <img class="fish__image" src="${fish.image}" alt="">
            </div>
            <div class="fish__name">${fish.name}</div>
            <button id="button--${fish.name}">Details</button>

            <dialog class="dialog--fish" id="details--${fish.name}">
                <div>Species: ${fish.species}</div>
                <div>Location: ${fish.location}</div>
                <div>Length: ${fish.size}</div>
                <div>Food: ${fish.food.join(",")}</div>

                <button class="button--close">Close Dialog</button>
            </dialog>
        </div>
    `
}

export default Fish

// import Fish from "Fish.js"

// /**
//  *   FishList which renders individual fish objects as HTML
//  */
// import { useFish } from "./FishDataProvider.js"
// import Fish from "./Fish.js"

// const FishList = () => {

//     const contentElement = document.querySelector(".content")
//     const fishes = useFish()

//     // Generate all of the HTML for all of the fish
//     let fishHTMLRepresentations = ""
//     for (const fish of fishes) {
//         /*
//             Invoke the Fish component function
//             and pass the current fish object as an argument.
//             Each time, add the return value to the
//             fishHTMLRepresentations variable with `+=`
//         */
//     }

//     // Add a section, and all of the fish to the DOM
//     contentElement.innerHTML += `
//         <section class="fishList">
//             ${fishHTMLRepresentations}
//         </section>
//     `
// }

// export default FishList