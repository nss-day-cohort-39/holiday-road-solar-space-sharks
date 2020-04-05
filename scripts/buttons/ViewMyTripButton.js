// get a reference to the main DOM container
const eventHub = document.querySelector('.container')

export const ViewMyTripButton = (pageState = "home") => {
    return `
        <button id="viewMyTripButton" value="${pageState}">My Trip</button>
    `
}

/* add a click event listener that dispatches a custom event
telling the system to listen for when the my trip button was clicked */
eventHub.addEventListener('click', clickEvent => {
    if (clickEvent.target.id === "viewMyTripButton") {

        const lastPageState = document.querySelector("#viewMyTripButton").value

        //update the value of the back button on the myTrip view so that it will know what page to go back to when clicked
        document.querySelector("#myTripView__backButton").value = lastPageState

        const viewMyTripsEvent = new CustomEvent('myTripButtonClicked')
        eventHub.dispatchEvent(viewMyTripsEvent)
    }
})