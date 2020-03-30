//function to render the HTML for the dropdown select of all parks

const eventHub = document.querySelector('.container')
    // accepts parks data array and returns HTMl string with select dropdown + options
export const ParkSelectDropdown = (allTheParks) => {
        return `
        <select id="parkSelectDropdown">
            <option value="0">Please Choose a Park</option>
            ${
                allTheParks.map(onePark => {
                    return `<option id="option--${onePark.parkCode}" value="${onePark.parkCode}">${onePark.name} - ${onePark.states}</option>`
                }).join("")
            }
        </select>
    `
}
// when park chosen in dropdown, send change event to eventHub with detail of Park Chosen (destination: ParkSelectComponent)
eventHub.addEventListener("change", changeEvent => {
    if (changeEvent.target.id === "parkSelectDropdown") {

        let parkSelectDropdownValue = document.getElementById("parkSelectDropdown").value
        let parkSelectDropDownName = document.querySelector(`#option--${parkSelectDropdownValue}`).innerHTML

        const changeParkClickEvent = new CustomEvent("parkDropDownChanged", {
            detail: {
                parkCode: parkSelectDropdownValue,
                parkName: parkSelectDropDownName
            }
        })

        eventHub.dispatchEvent(changeParkClickEvent)
    }
})