let foods = []

export const getFoods = () => {
    
   return fetch("http://holidayroad.nss.team/eateries")
        .then(response => response.json())
        .then(parsedFoods => {
                foods = parsedFoods
            }
        )
}
export const useFoods = () => foods.slice()