import { useTrips, getTrips } from './savedTripsProvider.js'
import { SavedTrip } from './SavedTrip.js'
import { getFoods } from '../foods/foodProvider.js'
import { getParksByParkCode } from '../parks/parkProvider.js'
import { getAttractions } from '../attractions/attractionProvider.js'

const eventHub = document.querySelector('.container')

// get a reference to the trip container in the DOM
const contentTarget = document.querySelector('.savedTripsContainer')

eventHub.addEventListener("mySavedTripsBtnWasClicked", event => render())

// create a render function that renders the saved trips
const render = () => {
    getTrips().then(() => {

        const trips = useTrips()
            // iterate all trips in database.json and return a string of all Park Codes separated by a comma
        const stringOfParkCodes = trips.map(trip => {
            return trip.parkCode
        }).join(",")

        // query all parks on park website and return array of park objects that match codes passed in "stringOfCodes"
        getParksByParkCode(stringOfParkCodes)
            .then(getFoods)
            .then(getAttractions)
            .then(() => {
                contentTarget.innerHTML = `
      <h2>My Saved Trips</h2>
      ${trips.map(trip => SavedTrip(trip)).join('')}
      `
            })
    })
}

eventHub.addEventListener('tripWasSaved', () => {
    render()
})