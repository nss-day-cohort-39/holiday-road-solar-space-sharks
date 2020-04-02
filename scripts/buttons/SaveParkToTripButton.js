import { getCampgroundsByPark, useCampgroundsByPark } from "../campgrounds/campgroundProvider.js"

const eventHub = document.querySelector('.container')

export const SaveParkButton = () => {
    return `
        <button id="saveParkButton">Save Park to Trip</button>
    `
}

//creates a click event listener for the save park button that dispatches the parkCode in a custom event
eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveParkButton") {
        let parkSelectDropdownValue = document.getElementById("parkSelectDropdown").value

        let hasCampgrounds = false

        getCampgroundsByPark(parkSelectDropdownValue).then(() => {
            const campgrounds = useCampgroundsByPark()
            if (campgrounds.length === 0) {
                hasCampgrounds = false
            } else {
                hasCampgrounds = true
            }
        })

        const saveParkClickEvent = new CustomEvent("saveParkButtonClicked", {
            detail: {
                parkCode: parkSelectDropdownValue,
                campground: hasCampgrounds
            }
        })

        eventHub.dispatchEvent(saveParkClickEvent)

    }
})