import { keys } from "../Settings.js"

const loadingVanAnimation = document.querySelector('#loading')

let parksByState = []
    // fetch the parks data from the local server and create an array copy to hold all parks data
export const getParksByState = (stateCode) => {
    loadingVanAnimation.classList.remove('hidden');
    return fetch(`https://developer.nps.gov/api/v1/parks?stateCode=${stateCode}&api_key=${keys.npsKey}`)
        .then(response => response.json())
        .then(parsedParks => {
            loadingVanAnimation.classList.add('hidden');
            parksByState = parsedParks.data
        })
}
export const useParksByState = () => parksByState.slice()


let parksByParkCode = []
export const getParksByParkCode = (parkCode) => {
    return fetch(`https://developer.nps.gov/api/v1/parks?parkCode=${parkCode}&api_key=${keys.npsKey}`)
        .then(response => response.json())
        .then(parsedParks => {
            parksByParkCode = parsedParks.data
        })
}

export const useParksByParkCode = () => parksByParkCode.slice()