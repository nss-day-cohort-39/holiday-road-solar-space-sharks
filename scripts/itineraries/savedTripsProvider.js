const eventHub = document.querySelector('.container')
let savedTrips = []
const loadingVanAnimation = document.querySelector('#loading')
export const dispatchTripSavedEvent = () => {
    const tripSavedEvent = new CustomEvent('tripWasSaved')
    eventHub.dispatchEvent(tripSavedEvent)
}

export const getTrips = () => {
    loadingVanAnimation.classList.remove('hidden');
    return fetch('http://localhost:3000/trips')
        .then(res => res.json())
        .then(parsedTrips => {
            loadingVanAnimation.classList.add('hidden');
            savedTrips = parsedTrips
        })
}

export const saveNewTrip = newTripObject => {
    loadingVanAnimation.classList.remove('hidden');
    return fetch('http://localhost:3000/trips', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newTripObject)
        })
        .then(getTrips)
        .then(dispatchTripSavedEvent)
        .then(() => {
            loadingVanAnimation.classList.add('hidden');
        })
}

export const useTrips = () => savedTrips.slice()