import { keys } from "../Settings.js"

let weather = []

export const getWeather = (lat, lon) => {


    return fetch(`http://api.openweathermap.org/data/2.5/forecast/?lat=${lat}&lon=${lon}&appid=${keys.weatherKey}`)
        .then(response => response.json())
        .then(parsedWeather => {
            weather = parsedWeather.list
        })
}
export const useWeather = () => weather.slice()