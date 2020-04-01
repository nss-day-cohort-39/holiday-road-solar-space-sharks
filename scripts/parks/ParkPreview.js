import { RenderWeather } from "../weather/WeatherComponent.js"

/*
    creates an HTML representation of the park details
*/

export const ParkPreview = (parkObject) => {



        return `
            <h2>${parkObject.fullName}</h2>
            ${parkObject.images.length !== 0 ? `<img class="parkImage" src="${parkObject.images[0].url}" alt="Photo of ${parkObject.fullName}" title="Photo of ${parkObject.fullName}"><p>${parkObject.description}</p>` : `<p>${parkObject.description}</p>`}
            <div class="weather">${parkObject.latitude !== "" ? RenderWeather() : parkObject.weatherInfo}
            </div>`
            
        }