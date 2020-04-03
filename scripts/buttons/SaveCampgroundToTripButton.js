const eventHub = document.querySelector('.container')

export const SaveCampgroundButton = () => {
    return `
        <button id="saveCampgroundButton">Save Campground to Trip</button>
    `
}

//creates a click event listener for the save campground button that dispatches the parkCode in a custom event
eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveCampgroundButton") {

        let campgroundSelectDropdownValue = document.getElementById("campgroundSelectDropdown").value

        const saveCampgroundClickEvent = new CustomEvent("saveCampgroundButtonClicked", {
            detail: {
                campgroundId: campgroundSelectDropdownValue
            }
        })

        eventHub.dispatchEvent(saveCampgroundClickEvent)

    }
})