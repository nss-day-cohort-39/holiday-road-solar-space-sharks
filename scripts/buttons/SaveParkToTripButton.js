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
        let parkSelectDropDownName = document.querySelector(`#option--${parkSelectDropdownValue}`).innerHTML


        const saveParkClickEvent = new CustomEvent("saveParkButtonClicked", {
            detail: {
                parkCode: parkSelectDropdownValue,
                parkName: parkSelectDropDownName
            }
        })

        eventHub.dispatchEvent(saveParkClickEvent)

    }
})