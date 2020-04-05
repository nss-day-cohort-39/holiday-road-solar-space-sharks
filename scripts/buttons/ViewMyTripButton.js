// get a reference to the main DOM container
const eventHub = document.querySelector('.container')

export const ViewMyTripButton = (pageState = "home") => {
    return `
        <button class="viewMyTripButton" value="${pageState}">My Trip</button>
    `
}

/* add a click event listener that dispatches a custom event
telling the system to listen for when the my trip button was clicked */
eventHub.addEventListener('click', clickEvent => {
    if (clickEvent.target.classList.contains("viewMyTripButton")) {

        const lastPageState = clickEvent.target.value

        const viewMyTripsEvent = new CustomEvent('myTripButtonClicked', {
            detail: {
                newPageState: lastPageState
            }
        })
        eventHub.dispatchEvent(viewMyTripsEvent)
    }
})