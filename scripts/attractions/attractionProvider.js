// http://holidayroad.nss.team/bizarreries

let attractions = []

export const getAttractions = () => {
    
   return fetch("http://holidayroad.nss.team/bizarreries")
        .then(response => response.json())
        .then(parsedAttractions => {
                attractions = parsedAttractions
            }
        )
}
export const useAttractions = () => attractions.slice()