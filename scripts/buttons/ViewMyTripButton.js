// get a reference to the main DOM container
const eventHub = document.querySelector('.container')

export const ViewMyTripButton = () => {
    return `
        <button id="viewMyTripButton">My Trip</button>
    `
}

/* add a click event listener that dispatches a custom event
telling the system to listen for when the my trip button was clicked */
eventHub.addEventListener('click', clickEvent => {
    if (clickEvent.target.id === "viewMyTripButton") {
        const viewMyTripsEvent = new CustomEvent('myTripButtonClicked')
        eventHub.dispatchEvent(viewMyTripsEvent)
    }
})