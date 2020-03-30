//function to render the HTML for the dropdown select of all parks

const eventHub = document.querySelector('.container')
    // accepts parks data array and returns HTMl string with select dropdown + options
export const AttractionSelectDropdown = (allTheAttractions) => {
        return `
        <select id="attractionSelectDropdown">
            <option value="0">Please Choose an Attraction</option>
            ${
                allTheAttractions.map(oneAttraction => {
                    return `<option id="attractionOption--${oneAttraction.id}" value="${oneAttraction.id}">${oneAttraction.name} - ${oneAttraction.city}</option>`
                }).join("")
            }
        </select>
    `
}

eventHub.addEventListener("change", changeEvent => {
    if (changeEvent.target.id === "attractionSelectDropdown") {
    
        let attractionSelectDropdownValue = document.getElementById("attractionSelectDropdown").value
        let attractionSelectDropDownName = document.querySelector(`#attractionOption--${attractionSelectDropdownValue}`).innerHTML

        const changeAttractionClickEvent = new CustomEvent("attractionDropDownChanged", {
            detail: {
                attractionId: attractionSelectDropdownValue,
                attractionName: attractionSelectDropDownName
            }
        })

        eventHub.dispatchEvent(changeAttractionClickEvent)
    }
    
})