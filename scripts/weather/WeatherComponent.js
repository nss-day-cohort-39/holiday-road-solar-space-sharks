import { useWeather } from "./weatherProvider.js";

const getDayOfTheWeek = (timestamp) => {
    const dayText = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
    ]

    //convert the timestamp into a JavaScript date
    const date = new Date(timestamp * 1000);

    //returns the day of the week in number format (ex: 0=Sun, 2=Tue, etc.)
    const day = date.getDay()

    return dayText[day]
}

export const RenderWeather = () => {
    let weatherHTML = ""
    const weather = useWeather()

    //filters the weather to get data from noon of each day
    const filteredWeather = weather.filter(day => day.dt_txt.split(" ")[1] === "12:00:00")

    filteredWeather.map(day => {

        const fahrenheit = Math.floor((day.main.temp - 273) * (9 / 5) + 32)

        weatherHTML += `
                <div class="weatherTable">
                    <div class="weatherDate">${getDayOfTheWeek(day.dt)}</div>
                    <div class="weatherIcon"><img class="weatherIconImage" src="http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png"></div>
                    <div class="weatherTemp">${fahrenheit}&deg;</div>
                </div>
                `
    }).join("")

    return weatherHTML
}