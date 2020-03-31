const eventHub = document.querySelector('.container')
let savedTrips = []

export const dispatchTripSavedEvent = () => {
  const tripSavedEvent = new CustomEvent('tripWasSaved')
  eventHub.dispatchEvent(tripSavedEvent)
}

export const getTrips = () => {
  return fetch('http://localhost:3000/trips')
    .then(res => res.json())
    .then(parsedTrips => {
      savedTrips = parsedTrips
    })
}

export const saveNewTrip = newTripObject => {
  return fetch('http://localhost:3000/trips', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newTripObject)
  })
    .then(getTrips)
    .then(dispatchTripSavedEvent)
}

export const useItineraries = () => savedTrips.slice()
