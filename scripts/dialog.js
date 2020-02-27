const initializeDetailButtonEvents = () => {
    // CAN'T TOUCH THIS - START
    const allCloseButtons = document.querySelectorAll(".button--close")

    for (const btn of allCloseButtons) {
        btn.addEventListener(
            "click",
            theEvent => {
                const dialogElement = theEvent.target.parentNode
                dialogElement.close()
            }
        )
    }
    // CAN'T TOUCH THIS - END


    // You will be writing code below this line
 document.querySelector("#button--Betty").addEventListener(
        "click",
        theClickEvent => {
            const theDialog = document.querySelector("#details--Betty")
            theDialog.showModal()
        }
    )

    document.querySelector("#button--Nemo").addEventListener(
        "click",
        theClickEvent => {
            const theDialog = document.querySelector("#details--Nemo")
            theDialog.showModal()
        }
    )

    document.querySelector("#button--Dory").addEventListener(
        "click",
        theClickEvent => {
            const theDialog = document.querySelector("#details--Dory")
            theDialog.showModal()
        }
    )
    document.querySelector("#button--Lucy").addEventListener(
        "click",
        theClickEvent => {
            const theDialog = document.querySelector("#details--Lucy")
            theDialog.showModal()
        }
    )
    document.querySelector("#button--Nicolas").addEventListener(
        "click",
        theClickEvent => {
            const theDialog = document.querySelector("#details--Nicolas")
            theDialog.showModal()
        }
    )

    document.querySelector("#button--Jules").addEventListener(
        "click",
        theClickEvent => {
            const theDialog = document.querySelector("#details--Jules")
            theDialog.showModal()
        }
    )
}


export default initializeDetailButtonEvents; 