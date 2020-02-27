const Tip = (tip) => {
    return `
        <div class="tip">
    
            <div class="tip__title">${tip.title}</div>
            <button id="button--${tip.title}">More Info</button>

            <dialog class="dialog--fish" id="details--${tip.tip_}">
                <div>Tip1: ${tip.tip_}</div>
                <button class="button--close">Close Dialog</button>
            </dialog>
        </div>
    `
}

export default Tip