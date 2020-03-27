//function to render the HTML for the dropdown select of all parks

const eventHub = document.querySelector('.container')
    // accepts parks data array and returns HTMl string with select dropdown + options
export const AttractionSelectDropdown = (allTheAttractions) => {
        return `
        <select id="attractionSelectDropdown">
            <option value="0">Please Choose an Attraction</option>
            ${
                allTheAttractions.map(oneAttraction => {
                    return `<option id="option--${oneAttraction.id}" value="${oneAttraction.name}">${oneAttraction.name} - ${oneAttraction.city}</option>`
                }).join("")
            }
        </select>
    `
}