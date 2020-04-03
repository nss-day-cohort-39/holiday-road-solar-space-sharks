import { useTrips, getTrips } from './savedTripsProvider.js'
import { SavedTrip } from './SavedTrip.js'
import { getFoods } from '../foods/foodProvider.js'
import { getParksByParkCode } from '../parks/parkProvider.js'
import { getAttractions } from '../attractions/attractionProvider.js'
import { getCampgroundsByPark } from '../campgrounds/campgroundProvider.js'

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

        // first get Campgrounds (takes the longest) then get the rest of the data to correctly render Saved Trip Component
        getCampgroundsByPark(stringOfParkCodes)
            .then(getFoods)
            .then(getAttractions)
            .then(getParksByParkCode(stringOfParkCodes))
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