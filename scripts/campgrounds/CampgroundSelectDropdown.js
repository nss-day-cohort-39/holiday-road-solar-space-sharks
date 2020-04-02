//function to render the HTML for the dropdown select of all campgrounds for one park

const eventHub = document.querySelector('.container')
    // accepts campground data array and returns HTML string with select dropdown + options
export const CampgroundSelectDropdown = (allTheCampgrounds) => {
        return `
        <select id="campgroundSelectDropdown">
            <option value="0">Please Choose a Campground</option>
            ${
                allTheCampgrounds.map(oneCampground => {
                    return `<option id="campgroundOption--${oneCampground.id}" value="${oneCampground.id}">${oneCampground.name}</option>`
                }).join("")
            }
        </select>
    `
}
// when food is chosen in dropdown, send change event to eventHub with detail of Food Chosen (destination: FoodSelectComponent)
eventHub.addEventListener("change", changeEvent => {
    if (changeEvent.target.id === "campgroundSelectDropdown") {

        let campgroundSelectDropdownValue = document.getElementById("campgroundSelectDropdown").value

        const changeCampgroundClickEvent = new CustomEvent("campgroundDropDownChanged", {
            detail: {
                campgroundId: campgroundSelectDropdownValue
            }
        })

        eventHub.dispatchEvent(changeCampgroundClickEvent)
    }
})