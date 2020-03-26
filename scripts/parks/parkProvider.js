let parks = []
    // fetch the parks data from the local server and create an array copy to hold all parks data
export const getParks = () => {
    return fetch(`http://localhost:3000/parks`)
        .then(response => response.json())
        .then(parsedParks => {
            parks = parsedParks
        })
}

export const useParks = () => parks.slice()