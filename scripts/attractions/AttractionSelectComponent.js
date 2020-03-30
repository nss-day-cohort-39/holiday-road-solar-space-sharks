import { useAttractions } from "./attractionProvider.js"
import { AttractionSelectDropdown } from "./AttractionSelectDropdown.js"
import { AttractionPreview } from "./AttractionPreview.js"
import { SaveAttractionButton } from "../buttons/SaveAttractionToTripButton.js"
import { ViewMyTripButton } from "../buttons/ViewMyTripButton.js"



const eventHub = document.querySelector('.container')
const contentTarget = document.querySelector(".dropdownContainer")

// export the initial page rendering of the Attraction Select Dropdown

export const RenderAttractionsSelectComponent = () => {
    render()
}

// function that pulls the attractions data and iterates each attraction to display the Attraction dropdown HTML rep.

const render = () => {
    const attractions = useAttractions()
    contentTarget.innerHTML += AttractionSelectDropdown(attractions)

    contentTarget.innerHTML += `
    <section id="attractionPreview"></section>
    `
    contentTarget.innerHTML += SaveAttractionButton()

    contentTarget.innerHTML += ViewMyTripButton()

}

eventHub.addEventListener("attractionDropDownChanged", event => {
    const contentTarget = document.querySelector("#attractionPreview")

    const attractions = useAttractions()

    //get the value of the attractionId that the user chose
    let attractionSelectDropdownValue = document.getElementById("attractionSelectDropdown").value

    const foundAttraction = attractions.find(attraction => attraction.id === parseInt(attractionSelectDropdownValue))

    //show the details of the attraction
    contentTarget.innerHTML = AttractionPreview(foundAttraction)
})