import { ViewMyTripButton } from "../buttons/ViewMyTripButton.js"
import { useFoods } from "./foodProvider.js"
import { FoodSelectDropdown } from "./FoodSelectDropdown.js"
import { FoodPreview } from "./FoodPreview.js"
import { SaveFoodButton } from "../buttons/SaveFoodToTripButton.js"

const eventHub = document.querySelector('.container')
const contentTarget = document.querySelector(".dropdownContainer")

// export the initial page rendering of the Food Select Dropdown
export const RenderFoodSelectComponent = () => {
    render()
}

// function that pulls the food data and iterates each restaurant to display the Food dropdown HTML rep. 
const render = () => {
    const foods = useFoods()
    contentTarget.innerHTML += FoodSelectDropdown(foods)

    contentTarget.innerHTML += `
    <section id="foodPreview"></section>
    `
    contentTarget.innerHTML += SaveFoodButton()

    contentTarget.innerHTML += ViewMyTripButton()

}

eventHub.addEventListener("foodDropDownChanged", event => {
    const contentTarget = document.querySelector("#foodPreview")

    const foods = useFoods()

    //get the value of the food ID that the user chose
    let foodSelectDropdownValue = document.getElementById("foodSelectDropdown").value

    const foundFood = foods.find(food => food.id === parseInt(foodSelectDropdownValue))

    //show the details of the food place
    contentTarget.innerHTML = FoodPreview(foundFood)
})