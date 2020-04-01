import { keys } from "../Settings.js"

let weather = []
const loadingVanAnimation = document.querySelector('#loading')

export const getWeather = (lat, lon) => {

    loadingVanAnimation.classList.remove('hidden');
    return fetch(`http://api.openweathermap.org/data/2.5/forecast/?lat=${lat}&lon=${lon}&appid=${keys.weatherKey}`)
        .then(response => response.json())
        .then(parsedWeather => {
            loadingVanAnimation.classList.add('hidden');
            weather = parsedWeather.list
        })
}
export const useWeather = () => weather.slice()