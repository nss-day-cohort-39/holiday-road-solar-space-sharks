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
        //list of all the campgrounds for the chosen park
        const campgrounds = useCampgroundsByPark()
        render(campgrounds)

    })
})

eventHub.addEventListener("campgroundDropDownChanged", event => {
    const contentTarget = document.querySelector("#campgroundPreview")

    const campgrounds = useCampgroundsByPark()

    //get the value of the campground ID that the user chose
    let campgroundSelectDropdownValue = document.getElementById("campgroundSelectDropdown").value

    const foundCampground = campgrounds.find(campground => campground.id === campgroundSelectDropdownValue)
    //show the details of the campgrounde
    contentTarget.innerHTML = CampgroundPreview(foundCampground)
})