import { useTrips } from './savedTripsProvider.js'
import { SavedTrip } from './SavedTrip.js'
import { getFoods } from '../foods/foodProvider.js'
import { getParksByParkCode } from '../parks/parkProvider.js'
import { getAttractions } from '../attractions/attractionProvider.js'

const eventHub = document.querySelector('.container')

// get a reference to the trip container in the DOM
const contentTarget = document.querySelector('.savedTripsContainer')

// create and export a function that renders the saved trips into the saved trips container
export const RenderSavedTripsList = () => {
  render()
}

// create a render function that renders the saved trips
const render = () => {
  getParksByParkCode()
    .then(getFoods)
    .then(getAttractions)
    .then(() => {
      const trips = useTrips()

      contentTarget.innerHTML = trips.map(trip => SavedTrip(trip)).join('<hr>')
    })
}

eventHub.addEventListener('tripWasSaved', () => {
  render()
})
