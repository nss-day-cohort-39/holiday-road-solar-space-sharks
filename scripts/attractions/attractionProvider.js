// http://holidayroad.nss.team/bizarreries

let attractions = []

// fetch the data for attractions and assign a copy of the data to an array variable
export const getAttractions = () => {

    return fetch("http://holidayroad.nss.team/bizarreries")
        .then(response => response.json())
        .then(parsedAttractions => {
            attractions = parsedAttractions
        })
}
export const useAttractions = () => attractions.slice()