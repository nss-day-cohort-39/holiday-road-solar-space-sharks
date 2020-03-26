
let parks = []

export const getParks = () => {
    

// fetch only Park Properties for Dropdown
    return fetch(`http://localhost:3000/parks`)
            .then(response => response.json())
            .then(parsedParks => {
                    parks = parsedParks
                    console.table(parks)
            })
}

export const useParks = () => parks.slice()