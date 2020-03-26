// get a reference to the main DOM container
const eventHub = document.querySelector('.container')

export const NewTripButton = () => {
    // return a string of HTML for a button
    return `
    <button class="newTripBtn">Start a New Trip!</button> 
  `
}

/* add a click event listener that dispatches a custom
event to the system telling it to listen for when the new
trip button was clicked */
eventHub.addEventListener('click', clickEvent => {
    if (clickEvent.target.classList.contains('newTripBtn')) {
        const newTripBtnClickEvent = new CustomEvent('newTripBtnWasClicked')
        eventHub.dispatchEvent(newTripBtnClickEvent)
    }
})