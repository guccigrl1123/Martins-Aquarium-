const Location = (location) => {
    return `
        <div class="location">
            <div class="location__title">${location.city}</div>
            <div class="location__water">${location.water}</div>
            <div class="location__date">${location.date}</div>
            <div>
            <img class="location__image" src="${location.image}" alt=""><div>
            </div>
    
            <button id="button--${location.city}">Details</button>

            <dialog class="dialog--location" id="details--${location.name}">
                <div>favorite Fish: ${location.favoriteFish}</div>
                <br>
                <div>Location: ${location.water}</div>
                <br>
            <button class="button--close">Close Dialog</button>
            </dialog>
            
        `
}


export default Location