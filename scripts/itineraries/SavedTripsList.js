import { useTrips } from './savedTripsProvider.js'
import { SavedTrip } from './SavedTrip.js'

const contentTarget = document.querySelector('.savedTripsContainer')

export const RenderSavedTripsList = () => {
  render()
}

const render = () => {
  const trips = useTrips()
  trips.map(trip => (contentTarget.innerHTML += SavedTrip(trip))).join('<hr>')
}
