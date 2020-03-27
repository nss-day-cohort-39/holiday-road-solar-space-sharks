import { useParks } from "./parkProvider.js"
import { parkSelectDropdown } from "./ParkSelect.js"

const contentTarget = document.querySelector(".dropdownContainer")

// export the initial page rendering of the Park Select Dropdown
export const RenderParksSelect = () => {
    render()
}

// function that pulls the parks data and iterates each park to display the Park dropdown HTML rep. 
const render = () => {
    const parks = useParks()
    contentTarget.innerHTML = parkSelectDropdown(parks)
}



