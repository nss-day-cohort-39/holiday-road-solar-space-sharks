// get a reference to the main DOM container
const eventHub = document.querySelector('.container')

export const MySavedTripsButton = () => {
    // return an HTML string for a button
    return `
    <div><button class="mySavedTripsBtn">View My Trips!</button></div> 
  `
}

/* add a click event listener that dispatches a custom event
telling the system to listen for when the my trips button was clicked */
eventHub.addEventListener('click', clickEvent => {
    if (clickEvent.target.classList.contains('mySavedTripsBtn')) {
        const mySavedTripsBtnClickEvent = new CustomEvent('mySavedTripsBtnWasClicked')
        eventHub.dispatchEvent(mySavedTripsBtnClickEvent)
    }
})