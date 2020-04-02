import { ViewMyTripButton } from "../buttons/ViewMyTripButton.js"
import { CampgroundSelectDropdown } from "./CampgroundSelectDropdown.js"
import { SaveCampgroundButton } from "../buttons/SaveCampgroundToTripButton.js"
import { getCampgroundsByPark, useCampgroundsByPark } from "./campgroundProvider.js"
import { CampgroundPreview } from "./CampgroundPreview.js"



const eventHub = document.querySelector('.container')
const contentTarget = document.querySelector(".dropdownContainer--campgrounds")

// function that pulls the food data and iterates each restaurant to display the Food dropdown HTML rep. 
const render = (filteredCampgrounds) => {

    contentTarget.innerHTML = CampgroundSelectDropdown(filteredCampgrounds)

    contentTarget.innerHTML += `
    <section id="campgroundPreview" class="previewProperties"></section>
    `
    contentTarget.innerHTML += SaveCampgroundButton()

    contentTarget.innerHTML += ViewMyTripButton()

}

eventHub.addEventListener("parkDropDownChanged", event => {
    const parkCode = event.detail.parkCode

    getCampgroundsByPark(parkCode).then(() => {
        //list of all the parks by state
        const campgrounds = useCampgroundsByPark()
        // let filteredCampgrounds = []
        // for (const  of chosenParkStatesArray) {
        //     const foundFood = foods.filter(food => food.state === state)
        //     Array.prototype.push.apply(filteredFoods, foundFood)
        // }
        // // //park code the user chose from the drop-down
        // // const chosenParkCode = event.detail.parkCode
        // //     //return a park object = the park code we chose in the park dropdown
        // // const chosenParkObject = parks.find(park => park.parkCode === chosenParkCode)

        // // pull states property from chosen park object in the form of a string
        // const chosenParkStates = chosenParkObject.states
        //     // creating a workable array of states from the string of states
        // const chosenParkStatesArray = chosenParkStates.split(",")

        // // iterate over array of states (within a park) and add each restaurant within those states to filtered foods array 
        // let filteredFoods = []
        // for (const state of chosenParkStatesArray) {
        //     const foundFood = foods.filter(food => food.state === state)
        //     Array.prototype.push.apply(filteredFoods, foundFood)
        // }

        render(campgrounds)

    })
})

eventHub.addEventListener("campgroundDropDownChanged", event => {
    const contentTarget = document.querySelector("#campgroundPreview")

    const campgrounds = useCampgroundsByPark()

    //get the value of the food ID that the user chose
    let campgroundSelectDropdownValue = document.getElementById("campgroundSelectDropdown").value

    const foundCampground = campgrounds.find(campground => campground.id === campgroundSelectDropdownValue)
    console.log(foundCampground)
    //show the details of the food place
    contentTarget.innerHTML = CampgroundPreview(foundCampground)
})