const eventHub = document.querySelector('.container')

export const SaveAttractionButton = () => {
    return `
        <button id="saveAttractionButton">Save Attraction to Trip</button>
    `
}

//creates a click event listener for the save attraction button that dispatches the attractionId in a custom event
eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveAttractionButton") {

        let attractionSelectDropdownValue = document.getElementById("attractionSelectDropdown").value
        let attractionSelectDropDownName = document.querySelector(`#attractionOption--${attractionSelectDropdownValue}`).innerHTML


        const saveAttractionClickEvent = new CustomEvent("saveAttractionButtonClicked", {
            detail: {
                attractionId: attractionSelectDropdownValue,
                attractionName: attractionSelectDropDownName
            }
        })

        eventHub.dispatchEvent(saveAttractionClickEvent)

    }
})