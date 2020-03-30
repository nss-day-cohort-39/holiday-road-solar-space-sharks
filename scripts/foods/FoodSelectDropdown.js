//function to render the HTML for the dropdown select of all restaurants

const eventHub = document.querySelector('.container')
    // accepts food data array and returns HTML string with select dropdown + options
export const FoodSelectDropdown = (allTheFoods) => {
        return `
        <select id="foodSelectDropdown">
            <option value="0">Please Choose a Restaurant</option>
            ${
                allTheFoods.map(oneFood => {
                    return `<option id="foodoption--${oneFood.id}" value="${oneFood.id}">${oneFood.businessName} - ${oneFood.state}</option>`
                }).join("")
            }
        </select>
    `
}
// when food is chosen in dropdown, send change event to eventHub with detail of Food Chosen (destination: FoodSelectComponent)
eventHub.addEventListener("change", changeEvent => {
    if (changeEvent.target.id === "foodSelectDropdown") {

        let foodSelectDropdownValue = document.getElementById("foodSelectDropdown").value

        const changeFoodClickEvent = new CustomEvent("foodDropDownChanged", {
            detail: {
                foodId: foodSelectDropdownValue
            }
        })

        eventHub.dispatchEvent(changeFoodClickEvent)
    }
})