const Location = (location) => {
    return `
        <div class="location">
    
            <div class="location__title">${location.city}</div>
            <div>${location.date}</div>
        </div>
    `
}

export default Location