let foods = []
const loadingVanAnimation = document.querySelector('#loading')

export const getFoods = () => {
    loadingVanAnimation.classList.remove('hidden');
    return fetch("http://holidayroad.nss.team/eateries")
        .then(response => response.json())
        .then(parsedFoods => {
            loadingVanAnimation.classList.add('hidden');
            foods = parsedFoods
        })
}
export const useFoods = () => foods.slice()