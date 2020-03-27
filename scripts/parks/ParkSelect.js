//function to render the HTML for the dropdown select of all parks

export const parkSelectDropdown = (allTheParks) => {
        return `
        <select>
            <option value="0">Please Choose a Park</option>
            ${
                allTheParks.map(onePark => {
                    return `<option value="${onePark.parkCode}">${onePark.name} - ${onePark.states}</option>`
                }).join("")
            }
        </select>
    `
}