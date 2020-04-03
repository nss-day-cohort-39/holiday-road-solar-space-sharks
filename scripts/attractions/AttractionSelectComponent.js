import { useAttractions, getAttractions } from "./attractionProvider.js"
import { AttractionSelectDropdown } from "./AttractionSelectDropdown.js"
import { AttractionPreview } from "./AttractionPreview.js"
import { SaveAttractionButton } from "../buttons/SaveAttractionToTripButton.js"
import { ViewMyTripButton } from "../buttons/ViewMyTripButton.js"
import { useParksByState } from "../parks/parkProvider.js"

const eventHub = document.querySelector('.container')
const contentTarget = document.querySelector(".dropdownContainer--attraction")

// export the initial page rendering of the Attraction Select Dropdown

export const RenderAttractionsSelectComponent = () => {
    render()
}

// function that pulls the attractions data and iterates each attraction to display the Attraction dropdown HTML rep.

const render = (filteredAttractions) => {

    contentTarget.innerHTML = AttractionSelectDropdown(filteredAttractions)

    contentTarget.innerHTML += `
    <section id="attractionPreview"></section>
    `
    contentTarget.innerHTML += SaveAttractionButton()

    contentTarget.innerHTML += ViewMyTripButton()

}

eventHub.addEventListener("parkDropDownChanged", event => {
    getAttractions().then(() => {

        //list of all the parks
        const parks = useParksByState()

        //list of all the attractions
        const attractions = useAttractions()

        //park code the user chose from the drop-down
        const chosenParkCode = event.detail.parkCode

        const chosenParkObject = parks.find(park => park.parkCode === chosenParkCode)

        const chosenParkStates = chosenParkObject.states
            // creating a workable array of states from the string of states
        const chosenParkStatesArray = chosenParkStates.split(",")

        // iterate over array of states (within a park) and add each attraction within those states to filtered attractions array 
        let filteredAttractions = []
        for (const state of chosenParkStatesArray) {
            const foundAttractions = attractions.filter(attraction => attraction.state === state)

            filteredAttractions = filteredAttractions.concat(foundAttractions)
        }

        render(filteredAttractions)

    })
})

eventHub.addEventListener("attractionDropDownChanged", event => {
    const contentTarget = document.querySelector("#attractionPreview")

    const attractions = useAttractions()

    //get the value of the attractionId that the user chose
    let attractionSelectDropdownValue = document.getElementById("attractionSelectDropdown").value

    const foundAttraction = attractions.find(attraction => attraction.id === parseInt(attractionSelectDropdownValue))

    //show the details of the attraction
    contentTarget.innerHTML = AttractionPreview(foundAttraction)
})