import { useParks } from "./parkProvider.js"
import { ParkSelectDropdown } from "./ParkSelectDropdown.js"
import { SaveParkButton } from "../buttons/SaveParkToTripButton.js"
import { ParkPreview } from "./ParkPreview.js"
import { ViewMyTripButton } from "../buttons/ViewMyTripButton.js"

const eventHub = document.querySelector('.container')
const contentTarget = document.querySelector(".dropdownContainer")

// export the initial page rendering of the Park Select Dropdown
export const RenderParksSelectComponent = () => {
    render()
}

// function that pulls the parks data and iterates each park to display the Park dropdown HTML rep. 
const render = () => {
    const parks = useParks()
    contentTarget.innerHTML = ParkSelectDropdown(parks)

    contentTarget.innerHTML += `
    <section id="parkPreview">
        <div class="weather"></div>
    </section>
    `
    contentTarget.innerHTML += SaveParkButton()

    contentTarget.innerHTML += ViewMyTripButton()

}

eventHub.addEventListener("parkDropDownChanged", event => {
    const contentTarget = document.querySelector("#parkPreview")

    const parks = useParks()

    //get the value of the parkCode that the user chose
    let parkSelectDropdownValue = document.getElementById("parkSelectDropdown").value

    const foundPark = parks.find(park => park.parkCode === parkSelectDropdownValue)

    //show the details of the park
    contentTarget.innerHTML = ParkPreview(foundPark)
})