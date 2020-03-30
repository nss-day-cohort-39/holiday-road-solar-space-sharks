import { getWeather } from "../weather/weatherProvider.js"
// import { RenderWeather } from "../weather/WeatherComponent.js"

/*
    creates an HTML representation of the park details
*/

export const ParkPreview = (parkObject) => {
    return `
        <h2>${parkObject.fullName}</h2>
        <img width = "200px" src="${parkObject.images[0].url}" alt="Photo of ${parkObject.fullName}" title="Photo of ${parkObject.fullName}">
        <div class="weather"></div>
    `
}

// export const ParkPreview = (parkObject) => {
//     const WeatherFunction = () => {
//         return `
//         <h2>${parkObject.fullName}</h2>
//         <img width = "200px" src="${parkObject.images[0].url}" alt="Photo of ${parkObject.fullName}" title="Photo of ${parkObject.fullName}">
//         <div class="weather">
//         ${RenderWeather()})
//         </div>
//     `
//     }
//     getWeather(parkObject.latitude, parkObject.longitude).then(WeatherFunction)
// }