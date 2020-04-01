// http://holidayroad.nss.team/bizarreries

let attractions = []
const loadingVanAnimation = document.querySelector('#loading')

// fetch the data for attractions and assign a copy of the data to an array variable
export const getAttractions = () => {
    loadingVanAnimation.classList.remove('hidden');
    return fetch("http://holidayroad.nss.team/bizarreries")
        .then(response => response.json())
        .then(parsedAttractions => {
            loadingVanAnimation.classList.add('hidden');
            attractions = parsedAttractions
        })
}
export const useAttractions = () => attractions.slice()