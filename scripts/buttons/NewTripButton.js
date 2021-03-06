// get a reference to the main DOM container
const eventHub = document.querySelector('.container')

export const NewTripButton = () => {
    // return a string of HTML for a button
    return `
    <button class="newTripBtn">Go!</button> 
  `
}

/* add a click event listener that dispatches a custom
event to the system telling it to listen for when the new
trip button was clicked */
eventHub.addEventListener('click', clickEvent => {
    if (clickEvent.target.classList.contains('newTripBtn')) {
        const stateCodeTarget = document.querySelector("#stateSelectDropdown").value
        const newTripBtnClickEvent = new CustomEvent('newTripBtnWasClicked', {
            detail: {
                stateCode: stateCodeTarget
            }
        })
        eventHub.dispatchEvent(newTripBtnClickEvent)
    }
})