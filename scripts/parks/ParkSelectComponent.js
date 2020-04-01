import { useParksByState, getParksByState } from "./parkProvider.js"
import { ParkSelectDropdown } from "./ParkSelectDropdown.js"
import { SaveParkButton } from "../buttons/SaveParkToTripButton.js"
import { ParkPreview } from "./ParkPreview.js"
import { ViewMyTripButton } from "../buttons/ViewMyTripButton.js"
import { RenderWeather } from "../weather/WeatherComponent.js"
import { getWeather } from "../weather/weatherProvider.js"

const eventHub = document.querySelector('.container')
const contentTarget = document.querySelector(".dropdownContainer--parks")

eventHub.addEventListener("newTripBtnWasClicked", event => {
    const state = event.detail.stateCode

    render(state)
})

// function that pulls the parks data and iterates each park to display the Park dropdown HTML rep. 
const render = (state) => {

    getParksByState(state)
        .then(() => {

            const parks = useParksByState()
            contentTarget.innerHTML = ParkSelectDropdown(parks)

            contentTarget.innerHTML += `
    <section id="parkPreview" class="previewProperties">
    </section>
    `
            contentTarget.innerHTML += SaveParkButton()

            contentTarget.innerHTML += ViewMyTripButton()
        })
}

eventHub.addEventListener("parkDropDownChanged", event => {
    const contentTarget = document.querySelector("#parkPreview")

    const parks = useParksByState()

    //get the value of the parkCode that the user chose
    let parkSelectDropdownValue = document.getElementById("parkSelectDropdown").value

    const foundPark = parks.find(park => park.parkCode === parkSelectDropdownValue)

    //get the weather data for the park location, then render the park preview into the content target
    if (foundPark.latitude !== "") {
        getWeather(foundPark.latitude, foundPark.longitude).then(() => {
            contentTarget.innerHTML = ParkPreview(foundPark)
        })
    } else {
        contentTarget.innerHTML = ParkPreview(foundPark)
    }
})