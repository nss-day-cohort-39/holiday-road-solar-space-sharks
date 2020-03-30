import { useWeather, getWeather } from "./weatherProvider.js";



export const RenderWeather = () => {
    const weather = useWeather()

    weather.map(day => {
        const [date, time] = day.dt_txt.split(" ")

        if (time === "12:00:00") {
            return `
            <div class="weatherTemp">${day.main.temp}</div>
            `
        }
    }).join("")
}

/* <div class="weatherDate">${date}</div>
<div class="weatherIcon"><img src="http://openweathermap.org/img/wn/${day.weather.icon}@1x.png" /></div> */