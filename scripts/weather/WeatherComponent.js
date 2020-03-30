import { useWeather, getWeather } from "./weatherProvider.js";
import { useParks } from "../parks/parkProvider.js";


const eventHub = document.querySelector('.container')

eventHub.addEventListener("parkDropDownChanged", event => {
    const parkId = event.detail.parkCode
    const parks = useParks()
    const foundPark = parks.find(park => park.parkCode === parkId)
    RenderWeather(foundPark)
})
const RenderWeather = (parkObject) => {
    const contentTarget = document.querySelector(".weather")
    getWeather(parkObject.latitude, parkObject.longitude).then(() => {
        const weather = useWeather()
        contentTarget.innerHTML = ""
        weather.forEach(day => {
            const [date, time] = day.dt_txt.split(" ")
            const fahrenheit = Math.floor((day.main.temp -273)*(9/5) + 32)
            console.log(weather)
            if (time === "12:00:00") {
                contentTarget.innerHTML += `
                <div class="weatherTable">
                    <div class="weatherDate">${date}</div>
                    <div class="weatherIcon"><img src="http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png"></div>
                    <div class="weatherTemp">${fahrenheit}</div>
                </div>
                `
            }
        });
    })
    // weather.map(day => {
    //     const [date, time] = day.dt_txt.split(" ")
        
    //     if (time === "12:00:00") {
    //         return `
    //         <div class="weatherTemp">${day.main.temp}</div>
    //         `
    //     }
    // }).join("")
}



/* <div class="weatherDate">${date}</div>
<div class="weatherIcon"><img src="http://openweathermap.org/img/wn/${day.weather.icon}@1x.png" /></div> */