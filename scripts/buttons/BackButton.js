export const BackButton = (newPageState = "home") => {
    return `<button id="backButton--${newPageState}" class="backButton">Back</button>`
}

const eventHub = document.querySelector(".container")

//back button event
eventHub.addEventListener('click', clickEvent => {
    if (clickEvent.target.classList.contains('backButton')) {
        const [prefix, newPageState] = clickEvent.target.id.split("--")

        const backButtonClickEvent = new CustomEvent('backButtonClicked', {
            detail: {
                newPageState: newPageState
            }
        })
        eventHub.dispatchEvent(backButtonClickEvent)
    }
})