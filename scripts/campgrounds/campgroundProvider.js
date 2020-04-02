import { keys } from "../Settings.js"

const loadingVanAnimation = document.querySelector('#loading')

let campgroundsByPark = []
    // fetch the parks data from the local server and create an array copy to hold all parks data
export const getCampgroundsByPark = (parkCode) => {
    loadingVanAnimation.classList.remove('hidden');
    return fetch(`https://developer.nps.gov/api/v1/campgrounds?parkCode=${parkCode}&api_key=${keys.npsKey}`)
        .then(response => response.json())
        .then(parsedCampgrounds => {
            loadingVanAnimation.classList.add('hidden');
            campgroundsByPark = parsedCampgrounds.data
        })
}
export const useCampgroundsByPark = () => campgroundsByPark.slice()
