
let parks = []

export const getParks = () => {
    

    return fetch(`http://localhost:3000/parks`)
            .then(response => response.json())
            .then(parsedParks => {
                    parks = parsedParks
            })
}

export const useParks = () => parks.slice()