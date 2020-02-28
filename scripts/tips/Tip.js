const Tip = (tip) => {
    return `
        <ol class="tip">
    
            <li class="tip__title">${tip.title}</li>
            <li class="tip__tip">${tip.tip}</li>
        </ol>


    `
}

export default Tip